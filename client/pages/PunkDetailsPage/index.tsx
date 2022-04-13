import React from 'react';
import AppPage from '../../components/AppPage';
import {
  Box,
  Button,
  Divider,
  Grid,
  Link,
  Paper,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { getRandomEarthCloudfrontUrl } from '../../../util/cidUtils';
import { usePunkMetadata } from '../../hooks/punks/usePunkMetadata';
import {
  TRAIT_TYPE_TO_DISPLAY_NAME,
  uppercaseFirstLetters,
} from '../../utils/stringFormatters';
import { useOwnerOfPunk } from '../../hooks/punks/useOwnerOfPunk';
import ProgressButton from '../../components/ProgressButton';
import {
  getShortenedTerraAddress,
  getTerraFinderUrlForAddress,
} from '../../../util/terra/terraUtils';
import SuspenseAppPage from '../../components/SuspenseAppPage';
import { useAllTraitsData } from '../../hooks/punks/useAllTraitsData';

type Props = {
  punkNumber: number;
};

const PunkDetailsPage: React.FC<Props> = ({ punkNumber }) => {
  const theme = useTheme();

  const { data: punkMetadata, loading, error } = usePunkMetadata(punkNumber);
  const { allTraitsData } = useAllTraitsData();

  const {
    owner,
    loading: loadingOwner,
    error: loadingOwnerError,
  } = useOwnerOfPunk(punkNumber);

  if (loading || error || punkMetadata == null) {
    return <SuspenseAppPage state={loading ? 'loading' : 'error'} />;
  }

  return (
    <AppPage>
      <Grid
        container
        spacing={{ xs: 4 }}
        justifyContent="center"
        alignItems="stretch"
      >
        <Grid item xs={12} md={6}>
          <Paper>
            <Box>
              {/*TODO: Use next image*/}
              <img
                src={getRandomEarthCloudfrontUrl(punkMetadata.extension.image)}
                alt={punkMetadata.extension.name}
                style={{
                  borderRadius: theme.shape.borderRadius,
                  width: '100%',
                  objectFit: 'fill',
                }}
              />

              <Box textAlign="center" py={2}>
                <Box>
                  <Typography variant="h4">
                    {punkMetadata.extension.name}
                  </Typography>
                  <Typography variant="caption">
                    <strong>Token ID:</strong> {punkMetadata.token_id}
                  </Typography>
                </Box>

                <Stack
                  mt={2}
                  spacing={1}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Link
                    underline="none"
                    target="_blank"
                    href={getRandomEarthCloudfrontUrl(punkMetadata.token_uri)}
                  >
                    <Button variant="text" startIcon={<LinkIcon />}>
                      Metadata
                    </Button>
                  </Link>
                  <Link
                    underline="none"
                    target="_blank"
                    href={getRandomEarthCloudfrontUrl(
                      punkMetadata.extension.image
                    )}
                  >
                    <Button variant="text" startIcon={<LinkIcon />}>
                      Image
                    </Button>
                  </Link>
                </Stack>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper
            sx={{
              padding: 2,
              height: '100%',
            }}
          >
            <Stack spacing={2} textAlign="center" sx={{ marginBottom: 2 }}>
              <Stack
                spacing={1}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <Typography>Owner:</Typography>

                <Link
                  target="_blank"
                  underline="none"
                  href={
                    owner != null
                      ? getTerraFinderUrlForAddress(owner)
                      : undefined
                  }
                >
                  <ProgressButton
                    variant="outlined"
                    loading={loadingOwner}
                    disabled={!owner}
                  >
                    {loadingOwner
                      ? 'Loading'
                      : owner != null
                      ? getShortenedTerraAddress(owner)
                      : 'Error'}
                  </ProgressButton>
                </Link>
              </Stack>

              <Stack
                spacing={1}
                divider={<Divider orientation="horizontal" flexItem />}
              >
                {punkMetadata.extension.attributes.map((attribute) => {
                  const type = TRAIT_TYPE_TO_DISPLAY_NAME[attribute.trait_type];
                  const value = uppercaseFirstLetters(attribute.value);
                  const traitRarity =
                    allTraitsData?.[attribute.trait_type]?.valueData[
                      attribute.value
                    ].rarityPercentage;

                  return (
                    <Stack
                      direction="row"
                      key={attribute.trait_type}
                      spacing={2}
                      paddingY={1}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography variant="body1">
                        <strong>{type}:</strong>
                      </Typography>
                      <Stack alignItems="end" textAlign="end">
                        <Typography
                          variant="body1"
                          textAlign="end"
                          width="100%"
                        >
                          {value}
                        </Typography>
                        {traitRarity && (
                          <Typography
                            variant="caption"
                            color="primary"
                            textAlign="end"
                            width="100%"
                          >
                            Rarity: {traitRarity.toFixed(2)}%
                          </Typography>
                        )}
                      </Stack>
                    </Stack>
                  );
                })}
              </Stack>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </AppPage>
  );
};

export default PunkDetailsPage;
