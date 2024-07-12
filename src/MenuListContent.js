import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';

export default function MenuListContent(props) {
  const {
    data, viewBack
  } = props;
  console.log("data", data)
  return (
    <Flex
      direction={'column'}
      position={'absolute'}
      top={'100%'}
      bg={'yellow'}
      borderRadius={'none'}
      border={'limegreen dashed 2px'}
      m={0}
      minW={'100%'}
      overflow-y={'auto'}
      zIndex={100000}
    >
      {data?.map((item, i) => {
        return (
          <Box
            key={i}
            w={'100%'}
            color={'red'}
          >
           
              <Flex
                onClick={() => {
                //   setSMV(true);
                //   setSMD(item);
                  viewBack(true);
                }}
                px={'30px'}
                borderBottom={`1px solid green`}
                borderTop={i === 0 ? `1px solid green` : 'none'}
              >
                <Flex
                  w={'100%'}
                  justify={'space-between'}
                  fontWeight={'700'}
                  fontSize={'1rem'}
                  lineHeight={'1.7rem'}
                  my={'20px'}
                  _hover={{
                    // textDecor: 'underline',
                    color: 'DarkGreen',
                  }}
                >
                  <Text
                    color={'black'}
                    _hover={{ color: 'DarkGreen', textDecoration: 'underline' }}
                    _focus={{ color: 'DarkGreen', textDecoration: 'underline' }}
                    _active={{
                      color: 'DarkGreen',
                      textDecoration: 'underline',
                    }}
                  >
                    {item}
                  </Text>
                </Flex>
              </Flex>
          </Box>
        );
      })}
    </Flex>
  );
}
