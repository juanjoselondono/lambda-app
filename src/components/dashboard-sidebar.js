import { useEffect } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer, Typography, useMediaQuery } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { ChartBar as ChartBarIcon } from '../icons/chart-bar';
import { Cog as CogIcon } from '../icons/cog';
import { Lock as LockIcon } from '../icons/lock';
import { Selector as SelectorIcon } from '../icons/selector';
import { ShoppingBag as ShoppingBagIcon } from '../icons/shopping-bag';
import { User as UserIcon } from '../icons/user';
import { UserAdd as UserAddIcon } from '../icons/user-add';
import { Users as UsersIcon } from '../icons/users';
import { XCircle as XCircleIcon } from '../icons/x-circle';
import { Logo } from './logo';
import { NavItem } from './nav-item';

const items = [
  {
    href: '/',
    icon: (<ChartBarIcon fontSize="small" />),
    title: 'Dashboard'
  },

];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <div>
          <Box sx={{ p: 3}} style = {{display: 'flex', alignContent:'center', alignItems:'Center', justifyContent:'Center', justifyItems:'center'}}>
            <NextLink
              href="/"
              passHref
            >
              <a>
                <Logo/>
              </a>
            </NextLink>
          </Box>
          <Box sx={{ px: 2 }}>
            <Box
              sx={{
                alignItems: 'center',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                px: 3,
                py: '11px',
                borderRadius: 1
              }}
            >
              <div>
                <Typography
                  color="inherit"
                  variant="subtitle1"
                >
                  Lambda Team
                </Typography>
                <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  Escuela De Ingeniería EIA
                </Typography>
              </div>

            </Box>
          </Box>
        </div>
        <Divider
          sx={{
            borderColor: '#2D3748',
            my: 3
          }}
        />
        <Box sx={{ flexGrow: 1, textAlign:'center'}}>
        <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  Juan José Londoño David
          </Typography>
          <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  Sebastián Molina Puerta
          </Typography>
          <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  Miguel Angel Conrado
          </Typography>
          <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  Julián Álvarez Ortiz
          </Typography>
          <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  Alejandro Marín Gomez
          </Typography>
          <Typography
                  color="neutral.400"
                  variant="body2"
                >
                  Luis Felipe Rendón
          </Typography>
          <div>
          <Box
              sx={{
                alignItems: 'center',
                backgroundColor: ' #transparent ',
                cursor: 'pointer',
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'space-between',
                px: 3,
                py: '11px',
                borderRadius: 1,
                margin:5,
                color:'white',
                marginTop:'60%',
                borderColor: 'white'
              }}
            >
                <Typography
                  color="inherit"
                  variant="subtitle1"
                >
                  ©2022
                </Typography>
                <Typography
                  color="inherit"
                  variant="subtitle1"
                >
                    <a style={{color:'white'}} href='https://juanlondonod.ml/'>https://juanlondonod.ml/</a>
                </Typography>
                </Box>
          </div>
        </Box>
        <Divider sx={{ borderColor: '#2D3748' }} />
        <Box
          sx={{
            px: 2,
            py: 3
          }}
        >
        </Box>
      </Box>
    </>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
