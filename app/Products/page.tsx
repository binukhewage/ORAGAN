import React from 'react'
import Card from '../components/ProductCard';
import software from '../assets/software.png'
import Hardware from '../assets/hardware.png'

const Products = () => {
  return (
    <div className='h-screen pt-[100px]'>
        <div className='text-2xl font-bold'>Products</div>
        <div className='flex'>
        <Card
            imageSrc={Hardware.src}
            title="XION LORA CORE"
            description="Discover our premium hardware solutions designed to enhance your productivity."
            link="/projects/hardware/project01"
          />
          <Card
            imageSrc={software.src}
            title="IMSP"
            description="Explore our software solutions that are tailored to meet your specific needs."
            link="/projects/software/project01"
          />
        </div>
    </div>
  )
}

export default Products