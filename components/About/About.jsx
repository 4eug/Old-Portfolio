/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <Fade cascade>
      <div className="mt-32 p-4 md:p-10 flex flex-col justify-between">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
            <p className="text-xl text-purple-900 mt-10 md:mt-0 ">About Me</p>
            <h1 className="py-3 text-2xl md:text-3xl font-bold ">MySelf</h1>
            <p className="mt-2 text-md">
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV
              ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
              quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox
              nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox.
              Bright vixens jump; dozy fowl quack. Quick wafting zephyrs vex
              bold Jim. Quick zephyrs blow, vexing daft Jim. Sex-charged fop
              blew my junk TV quiz. How quickly daft jumping zebras vex. Two
              driven jocks help fax my big quiz. Quick, Baz, get my woven flax
              jodhpurs! Now fax quiz Jack! my brave ghost pled. Five quacking
              zephyrs jolt my wax bed. Flummoxed by job, kvetching W. zaps Iraq.
              Cozy sphinx waves quart jug of bad milk. A very bad quack might
              jinx zippy fowls. Few quips galvanized the mock jury box. Quick
              brown dogs jump over the lazy fox. The jay, pig, fox, zebra, and
              my wolves quack! Blowzy red vixens fight for a quick jump. Joaquin
              Phoenix was gazed by MTV for luck. A wizard’s job is to vex chumps
              quickly in fog. Watch , Alex fun TV quiz game.
            </p>
          </div>
          <div className="ml-0 pl-0 md:ml-10 md:pl-10">
            <img className="w-full" src="/About.png" alt="/" />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Hero;
