import React, { ReactNode } from 'react';
import Svg, { Path, G } from 'react-native-svg';
import theme, { Box } from '../../components/Theme';

interface SocialProps {}

const SIZE = theme.borderRadii.l * 2;
const Google = () => (
    <Svg width={20} height={20} viewBox="0 0 512 512" fill='none'>
    <Path
      d="M113.47 309.408L95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
      fill="#fbbb00"
    />
    <Path
      d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
      fill="#518ef8"
    />
    <Path
      d="M416.253 455.624l.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
      fill="#28b446"
    />
    <Path
      d="M419.404 58.936l-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
      fill="#f14336"
    />
  </Svg>
)

const FaceBoock = () => (
    <Svg
    height={20}
    viewBox="0 0 24 24"
    width={20}
  >
    <Path
      d="M15.997 3.985h2.191V.169C17.81.117 16.51 0 14.996 0 8.064 0 9.95 7.85 9.674 9H6.187v4.266h3.486V24h4.274V13.267h3.345l.531-4.266h-3.877c.188-2.824-.761-5.016 2.051-5.016z"
      fill="#3b5999"
    />
  </Svg>
)

const  Apple = ( ) => (
    <Svg
    width={22}
    height={22}
    viewBox="0 0 13.802 13.802"
  >
    <G fill="#030104">
      <Path d="M10.668 7.333c-.018-1.749 1.426-2.586 1.49-2.628-.811-1.185-2.073-1.348-2.524-1.366-1.073-.11-2.096.632-2.642.632-.544 0-1.386-.617-2.277-.601-1.172.018-2.251.682-2.855 1.73-1.217 2.112-.312 5.24.874 6.955.58.838 1.272 1.779 2.179 1.746.874-.035 1.204-.566 2.261-.566s1.354.566 2.278.549c.941-.018 1.536-.855 2.111-1.695.666-.973.94-1.916.957-1.963-.022-.012-1.833-.705-1.852-2.793zM8.93 2.204c.481-.583.807-1.395.718-2.204-.695.028-1.534.461-2.033 1.045-.447.517-.836 1.342-.732 2.135.774.061 1.566-.394 2.047-.976z" />
    </G>
  </Svg>
)

interface SocialIconProps {
    children: ReactNode;
}

const SocialIcon = ({children}: SocialIconProps) => {
    return (
        <Box 
            marginHorizontal='s'
            backgroundColor='white' 
            width={SIZE} 
            height={SIZE} 
            borderRadius='l' 
            justifyContent='center' 
            alignItems='center'
        >
        {children}
      </Box>
    )
}

const SocialLogin: React.FC = () => {
  return (
      <Box flexDirection='row' justifyContent='center'>
          <SocialIcon >
              <FaceBoock />
          </SocialIcon>
          <SocialIcon >
              <Google />
          </SocialIcon>
          <SocialIcon >
              <Apple />
          </SocialIcon>
      </Box>
  );
}

export default SocialLogin;