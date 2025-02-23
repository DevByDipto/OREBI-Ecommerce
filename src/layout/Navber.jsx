import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Image from '../components/Image'
import LogoImage from "../assets/Logo.png"
import List from '../components/List'

const Navber = () => {
  return (
    <nav className='py-8'>
      <Container>
        <Flex>
          <div className='w-4/12'>
          <Image src={LogoImage}/>
          </div>
          <div className='w-8/12'>
          <ul className='flex gap-x-10'>
            <List>Home</List>
            <List>Shop</List>
            <List>About</List>
            <List>Contacts</List>
            <List>Journal</List>
           
          </ul>
          </div>
        </Flex>
      </Container>
    </nav>
  )
}

export default Navber