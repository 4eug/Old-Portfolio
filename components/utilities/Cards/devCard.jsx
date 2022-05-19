/* eslint-disable @next/next/no-img-element */
import React from "react";
import DevMiniCard from "../miniCards/devMiniCards";

const DevCards = (props) => {
  const devArray = [
    { title: "Design", 
      subtitle: "Mobile Development & Product Design",
      description: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz g nymphs. Waltz, bad nymph, for quick jigs vex! Fox",
     id: 1 },
    { title: "Music",
     subtitle: "Music & Audio",
      description: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz g nymphs. Waltz, bad nymph, for quick jigs vex! Fox",
       id: 2 },
    { title: "Software",
     subtitle: "Software Development",
      description: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz g nymphs. Waltz, bad nymph, for quick jigs vex! Fox",
       id: 3 },
    { title: "Dance",
     subtitle: "Dance & Movement",
      description: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz g nymphs. Waltz, bad nymph, for quick jigs vex! Fox",
       id: 4 },
       { title: "Lifestyle",
     subtitle: "Lifestyle & Travel",
      description: "The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz g nymphs. Waltz, bad nymph, for quick jigs vex! Fox",
       id: 5 },
  ]
  return (
    <div className="w-full px-4 py-8 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {devArray.map((item) => (
        <DevMiniCard
        title={item.title}
            subtitle={item.subtitle}
            description={item.description}
            key={item.id}
        />
        ))}
      </div>
    </div>
  );
};

export default DevCards;
