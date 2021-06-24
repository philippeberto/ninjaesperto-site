import Image from 'next/image'

const Index = () => {
  return (
    <div className='h-screen bg-gradient-to-b from-blueTheme-dark to-blueTheme-light'>
      <div className='relative w-full p-4 mt-0 md:w-1/3 text-center md:rounded-lg md:m-auto'>
        {/* <div className='absolute inset-x-0 top-4'>
          <Image src='/img/logo_bco.png' width={200} height={200} />
        </div> */}
        <div className='absolute inset-y-0 top-32'>
          <Image src='/img/ninja-esperto2.png' width={1080} height={380} />
        </div>
        <div className='absolute inset-y-0 left-32 top-80'>
          <Image src='/img/embreve.png' width={240} height={80} />
        </div>
      </div>
    </div>
  )
}

export default Index