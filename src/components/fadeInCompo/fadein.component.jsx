import { Box, Button, Fade, ScaleFade, Slide, SlideFade, useDisclosure } from "@chakra-ui/react"

import React from 'react'

function FadeInComponent(isOpen=true) {
    
    return (
      <>
        <Fade in={isOpen}>
          <Box
            p="10px"
            color="white"
            mt="4"
            bg="teal.500"
            rounded="md"
            shadow="md"
          >
            Fade
          </Box>
        </Fade>
      </>
    )
  }
  export default FadeInComponent