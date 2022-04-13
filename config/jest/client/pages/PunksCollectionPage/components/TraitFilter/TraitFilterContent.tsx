import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Stack,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useEffect, useState } from 'react';
import {
  formatTraitRarityPercentage,
  TRAIT_TYPE_TO_DISPLAY_NAME,
  uppercaseFirstLetters,
} from '../../../../utils/stringFormatters';
import { pull } from 'lodash';
import { TraitTypeToValues } from '../../../../hooks/punks/useFilterByTrait';
import { useAllTraitsData } from '../../../../hooks/punks/useAllTraitsData';
import { TraitFilterProps } from './types';

const TraitFilterContent: React.FC<TraitFilterProps> = ({
  previousFilters,
  availableFilters,
  setTraitFilters,
  resetTraitFilters,
}) => {
  const { allTraitsData } = useAllTraitsData();
  // Holds current state of filters, which is not yet applied
  const [currentFilters, setCurrentFilters] =
    useState<TraitTypeToValues>(previousFilters);
  useEffect(() => {
    setCurrentFilters(previousFilters);
  }, [previousFilters]);

  const onCheckboxChange = (
    attributeType: string,
    attributeValue: string,
    isChecked: boolean
  ) => {
    setCurrentFilters((prev) => {
      const newFilterArrForType = prev[attributeType] ?? [];
      if (isChecked) {
        newFilterArrForType.push(attributeValue);
      } else {
        pull(newFilterArrForType, attributeValue);
      }

      return {
        ...prev,
        [attributeType]: newFilterArrForType,
      };
    });
  };

  return (
    <Stack spacing={2} pt={2}>
      <Box>
        {Object.keys(availableFilters).map((attributeType) => {
          const availableValues: string[] = availableFilters[attributeType];
          const appliedValueFilters: string[] =
            currentFilters[attributeType] ?? [];

          const accordionTitle = `${TRAIT_TYPE_TO_DISPLAY_NAME[attributeType]} (${availableValues.length})`;

          return (
            <Accordion key={attributeType} elevation={0} square>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1">{accordionTitle}</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  maxHeight: '30vh',
                  overflowY: 'scroll',
                }}
              >
                <FormGroup>
                  {availableValues.map((value) => {
                    // Format of <value> (rarity%)
                    const checkboxLabel = (
                      <Box>
                        {uppercaseFirstLetters(value)}
                        {allTraitsData != null && (
                          <Typography variant="caption">
                            &nbsp;(
                            {formatTraitRarityPercentage(
                              allTraitsData[attributeType].valueData[value]
                                .rarityPercentage
                            )}
                            )
                          </Typography>
                        )}
                      </Box>
                    );

                    return (
                      <FormControlLabel
                        key={value}
                        control={
                          <Checkbox
                            checked={appliedValueFilters.includes(value)}
                            onChange={(e, isChecked) => {
                              onCheckboxChange(attributeType, value, isChecked);
                            }}
                          />
                        }
                        label={checkboxLabel}
                      />
                    );
                  })}
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>

      <Stack spacing={1} mt={4} px={4}>
        <Button
          variant="contained"
          onClick={() => setTraitFilters(currentFilters)}
        >
          Apply
        </Button>
        <Button variant="text" onClick={resetTraitFilters}>
          Reset
        </Button>
      </Stack>
    </Stack>
  );
};

export default TraitFilterContent;
