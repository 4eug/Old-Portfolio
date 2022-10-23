/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import Marquee from "react-fast-marquee";

export const UiInspo = () => {
    return (
      <div className="mt-8 px-4 py-16  sm:max-w-xl md:max-w-full lg:px-[130px] lg:py-20">
        <div className="grid max-w-screen-xl xl:max-w-screen-2xl">
          <div className=" flex-col justify-center md:items-start w-full px-2 py-8">
            
            <h1 className="py-3 text-3xl md:text-5xl font-normal ">
                UI Design –
                Inspiro
            </h1>
            <Marquee gradient={false} speed={100} className="mt-10 md:mt-20">
                <div className="flex gap-1 md:gap-2 lg:grid-cols-3">
                
                    <img src="https://cdn.dribbble.com/users/5224484/screenshots/19210128/media/3cdf1d800543914492499a2b9b1a25af.jpg?compress=1&resize=600x400"/>
                            <img src="https://cdn.dribbble.com/users/5224484/screenshots/15411817/media/9b7b78c377019596c1a38fe73603aa67.jpg?compress=1&resize=600x400"/>
                          <img src="https://cdn.dribbble.com/users/5224484/screenshots/15184253/media/53988a6cd8a8c7060ff682fadc3debe2.jpg?compress=1&resize=600x400"/>
                          <img src="https://cdn.dribbble.com/users/5224484/screenshots/16934097/media/d4e3a33d05bc9d4220a8a70f075829a7.jpg?compress=1&resize=600x400"/>
                          <img src="https://cdn.dribbble.com/users/5224484/screenshots/14869287/shot-cropped-1609774629202.png?compress=1&resize=600x400"/>
                          <img src="https://cdn.dribbble.com/users/5224484/screenshots/15523874/media/326fb3371ffd05ae7455019216116ee5.jpg?compress=1&resize=600x400"/>
                          <img src="https://cdn.dribbble.com/users/5224484/screenshots/15411806/media/9ebcbd40c04adbcd4feca08df66a7132.jpg?compress=1&resize=600x400"/>                  
                </div>
            </Marquee>
            <Marquee gradient={false} direction="right" speed={100} className="mt-10">
                <div className="flex gap-1 md:gap-2 lg:grid-cols-3">
                <img src="https://cdn.dribbble.com/users/5224484/screenshots/11256954/shot-cropped-1588494031032.png?compress=1&resize=600x400"/>
                          <img src="https://cdn.dribbble.com/users/5224484/screenshots/15157088/media/d3fc2c4e816236d28932816050b946e3.jpg?compress=1&resize=600x400"/>
                          <img src="https://cdn.dribbble.com/users/5224484/screenshots/15157122/media/5bb7b082113d7032a4b27010ddfdacdf.jpg?compress=1&resize=600x400"/>
                          <img src="https://cdn.dribbble.com/users/5224484/screenshots/16068299/media/414b7e91b0df77211a3a50a3e8130994.png?compress=1&resize=600x400"/>
                          <img src="https://cdn.dribbble.com/users/5224484/screenshots/16372190/media/92a57ab411ada4cbdf5c6099ab9d79b4.png?compress=1&resize=600x400"/>
                          <img src="https://cdn.dribbble.com/users/5224484/screenshots/16372112/media/c87e8dfb17ee58bc53629d3187daf69e.png?compress=1&resize=600x400"/>
                          <img src="https://cdn.dribbble.com/users/5224484/screenshots/16181073/media/130a882cb8338f0d82406664e0070efc.png?compress=1&resize=600x400"/>
                           
                </div>
            </Marquee>

          </div>
        </div>
       
        
      </div>
    );
  };