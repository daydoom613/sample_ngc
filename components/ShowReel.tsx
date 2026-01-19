'use client'

export function ShowReel() {
  return (
    <section className="w-full h-screen relative overflow-hidden flex items-center justify-center">
      {/* Video Container with 90% sizing and rounded corners */}
      <div className="relative w-[90%] h-[90%] rounded-3xl overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/show_reel.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Text Overlay - Bottom Left */}
        <div className="absolute bottom-0 left-0 p-12 z-20">
          <div className="flex flex-col">
            <h1 
              className="text-4xl md:text-5xl font-bold leading-tight text-white"
              style={{ textShadow: '0 4px 12px rgba(0, 0, 0, 0.5)' }}
            >
              Nature Guru Creations VFX
            </h1>
            <p 
              className="text-2xl md:text-3xl font-light mt-2 text-white"
              style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.4)' }}
            >
              The Scientists of Emotions
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
