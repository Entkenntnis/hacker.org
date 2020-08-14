const bcrypt = require('bcryptjs')

function checkSolution(hash) {
  return async (answer) => {
    answer = answer.toLowerCase().trim()
    const correct = await bcrypt.compare(answer, hash)
    return { answer, correct }
  }
}

function stringreverse(s) {
  return s.split('').reverse().join('')
}

module.exports = [
  {
    id: 96,
    pos: { x: 415, y: 230 },
    title: 'Start',
    deps: [],
    html: `
      <p>Welcome! This is an homage to <a href="https://www.hacker.org/">hacker.org</a>, where I've spent a lot of time. I am especially fascinated by the challenges and want you to enjoy them as well.
      </p>
      
      <p>Start your adventure now. Your answer is 6 + 4 * 9.
      </p>
    `,
    check: checkSolution(
      '$2y$06$iuFxVtpYYfeKY3GDjufu1er/nDMg9fY7YwgIrSztP4qGDtnBDsDsK'
    ),
  },
  {
    id: 105,
    pos: { x: 330, y: 105 },
    title: 'Didactic Byte',
    deps: [96],
    html: `
      <p>Understanding bits and bytes is key to a hacker's foundation. Let us take the following decimal number:</p>
      
      <p><code>233</code></p>
      
      <p>This number can just fit in one byte. How would you write it in hexidecimal? (Sometimes people write hex numbers with a '0x' prefix, but here just give the digits, please.)</p>
    `,
    check: checkSolution(
      '$2y$06$oL8EAnh91TLWNo1GcGA3T.45xIxPFEM7y9cUnJ1sb7IoFpGoqBCQe'
    ),
  },
  {
    id: 17,
    pos: { x: 390, y: 295 },
    title: 'Who Goes there?',
    deps: [96],
    html: `
      <p>What is your name on hacker.org?</p>
    `,
    check: (answer, { req }) => {
      const reversed = stringreverse(answer)
      return {
        answer: reversed,
        correct: reversed == req.user.name,
      }
    },
  },
  {
    id: 10,
    pos: { x: 480, y: 375 },
    title: 'Visible Ink',
    deps: [96],
    html: `
      <p>The answer is right below this line... can you see it?<br>
      <span style="color:#191919">squint</span></p>
    `,
    check: checkSolution(
      '$2y$06$I8oYbLKvNThIlomcV/bMCuiHR/vQ9gKwJqj3fFNqg8JeeBTd87o5W'
    ),
  },
  {
    id: 106,
    pos: { x: 200, y: 125 },
    title: 'Didactic Bytes',
    deps: [105],
    html: `
      <p>Let us take the following three decimal numbers:</p>
      
      <p><code>199, 77, 202</code></p>
    
      <p>Convert each one into a byte. (Even though 77 does not require all 8 bits to express itself, when dealing with a group of data, we usually keep it in a consistent form.) Now, take those three bytes and combine them to form a 24-bit unsigned integer. The 199 byte is the high byte (most significant) and so forth. Please enter that 24-bit integer in decimal form, and that is your answer. (Hint: your answer will not be '19977202'!) 
      </p>
    
    `,
    check: checkSolution(
      '$2y$06$4qCGCQWnoLoqGFiI2EDvpO0zfzddkoKlmi5VR2kewvpIWLVdKVz82'
    ),
  },
  {
    id: 103,
    pos: { x: 125, y: 195 },
    title: 'Didactic RGB',
    deps: [106],
    html: `
      <p>Do you see the single-color image below?</p>
      
      <p><img src="/chals/didactrgb.png" width=64 height=64></p>
    
      <p>This image is actually only 1 pixel by 1 pixel, and is stretched out here so you can see it. What can such an image represent? Pixels are commonly composed on a computer of red, green, and blue components. Each component can be any number of bits -- the more bits, the more detail an image can reflect. A common number of bits per color is eight. If we look at this single pixel, we get three colors of eight bits each, which equals 24 bits of data total. What to do with those 24 bits? For this challenge, express it as a decimal integer. That is your answer. (In other words, the answer looks something like '12345678'. These are all 24 bits considered as one single number in decimal.)
      </p>
    
    `,
    check: checkSolution(
      '$2y$06$JHlDNLWHbhPkWEm4FvskKu4sYsCoB/wSD7/LuwLOopOpEXLYZxXXm'
    ),
  },
  {
    id: 104,
    pos: { x: 105, y: 275 },
    title: 'Didactic Red',
    deps: [103],
    html: `
      <p>Here we see another image, a four-pixel wide and single pixel high line:
      </p>
      
      <p><img src="/chals/redline.png" width=256 height=64></p>
      
      <p>Unlike the previous challenge, the only color here is red. Therefore, it's probably a good start to assume that the signal (the information we're trying to extract from the source) is just the red component, which means 8 bits per pixel. To answer this challenge, submit these four red values concatenated together, expressed in hexadecimal. Ie: something like '92AB7DF2'. A hint: the answer is based on an English word.</p>
    
    `,
    check: checkSolution(
      '$2y$06$rBnmbcLQgt.d1gNRCI2KwuB0cLp6QV7h.Bh8UbDpXgMcou9p24ThC'
    ),
  },
  {
    id: 107,
    pos: { x: 95, y: 380 },
    title: 'Didactic Green',
    deps: [104],
    html: `
      <p>Examine this image:
      </p>
      
      <p><img src="/chals/greenline.png" height=8 width=672></p>
      
      <p>Like the previous challenge, these pixels represent a series of bytes. This time, there are obviously too many bytes for the answer to just be the values stuck together. Your task here is to examine these bytes for their own meaning, and get the answer from there. 
      </p>
    
    `,
    check: checkSolution(
      '$2y$06$SCmwGdmpvNmLUl0H3XOcSux.8q01w.ZHvrnXjNzTpTYdn01di8Wtu'
    ),
  },
  {
    id: 272,
    pos: { x: 45, y: 315 },
    title: 'Didactic Blue',
    deps: [107],
    html: `
      <p>Similar to the last challenge, this adds one extra twist you can easily discover.
      </p>
      
      <p><img src="/chals/blue.png"></p>
    
    `,
    check: checkSolution(
      '$2y$06$O8LtXrjoM2JuxEVHQkLR4eMZC1ofjHEAadHrlb6GPSpE1ppnDKmau'
    ),
  },
  {
    id: 136,
    pos: { x: 175, y: 235 },
    title: 'Didactic Bits',
    deps: [106],
    html: `
      <p>Let's look at the following string:
      </p>
      
      <p><code>abbbabaaabbabaaaabbaababaabaaaaaabbaaaababbabbbaabbbaabbabbbabbbabbaabababbbaabaaabaaaaaabbabaababbbaabbaabaaaaaabbaaaababbaabaaabbbabababbabbababbaaabaabbbaabaabbaaaababbbabaaabbaabab</code></p>
      
      <p>Where to get started? The first thing to notice is that there are only two kinds of letters in the string. That should give you a clue as to how much signal each one represents. Now, what to do with the series? First, count how many letters there are. That number should give you a hint (try factoring it). Next, try to represent the data in a form that makes sense. The answer should become clear if you take the right approach.
      </p>
    
    `,
    check: checkSolution(
      '$2y$06$YXDGj9PybyjEjcut9hAQsuvIsNV/rqJSQsyt0e6Vvk0DQ02AzbH6i'
    ),
  },
  {
    id: 132,
    pos: { x: 180, y: 300 },
    title: 'Didactic Text 3',
    deps: [136, 127],
    html: `
      <p>This text appears to be verbatim from the source and in the orignal order. So where is the signal hiding?
      </p>
      
      <blockquote>
Lawsonomy is the knowledge of Life and everything pertaining thereto. 
Lawsonomy is based upon Life as it is and not upon a theory of what it ought to be.  
Theory, as espoused by so-called wise men or self-styled scholars has no place in Lawsonomy.  
Everything must be provable or reasonable or it is not Lawsonomy.  
Lawsonomy treats of things as they are and not as they are pretended to be. 
Facts, not fancies; Truth, not falsity; Knowledge not notions; is the foundation of Lawsonomy.  
Truth is simple and easily understood but falsity is complicated and misleading. 
A few words, sentences, paragraphs or pages are sufficient to tell the truth but it requires ponderous books and whole libraries to prop up falsity. 
Truth is Constructive and lives, but falsity is destructive and dies. 
Truth is real and eternal but falsity is ephemeral and abortive.  
Truth breeds strength and intellect but falsity breeds weakness and smart-alick-ism.  
Truth constructs instruments of reason but falsity breeds blowoffs of idiosyncrasies. 
Truth forms character but falsity causes deformity of expression.  
Everything can be said in favor of Truth; it is substantial, dependable, reliable and helpful but nothing can be said in favor of falsity, which is unreliable, deceptive, elusive and hurtful. 
Truth is a builder and is magnificent, but falsity is a wrecker and is hideous. 
Truth is all that is, was or will be, but falsity never is; never was or never can be. 
So, Lawsonomy stands for Truth as against falsity; constructiveness as against destructiveness. 
It stands for life, love, freedom and true expression as against the misrepresentation, hate, slavery and death of falsity.  
So if it isn't real; if it isn't truth; if it isn't knowledge; if it isn't intelligence; then it isn't Lawsonomy.  
Lawsonomy is easily understood by those who want the truth but it is the opposite of the tricky stuff taught by those who feed on falsity. 
It is an advanced Education and will develop reasoning faculties in hungry minds. 
Lawsonomy will give to youth stimulus for great future deeds and a tremendous advantage over those who are mix-educated according to present day falsification.  
One must study and practice Lawsonomy and learn it as one learns to walk and run or talk and sing. 
It is a formula that proves all things.  
But, only as one cleanses the mind of all falsities and develops the reasoning faculties with Truth and practical thoughts can one utilize this far-reaching formula to advantage. 
Just as it is not the quantity of food that you eat but the number of useful elements taken into the blood that makes your body strong and healthy so it is not the quantity of stuff that you read but the number of useful thoughts taken into the mind that makes the intellect clean and vigorous. 
Lawsonomy is an oasis of Truth in the midst of a desert of lies.  
It is for all thirsty minds and it is your fault, not mine, if you do not partake of it copiously. 
My duty was to prepare it for you. 
Your duty is to absorb it and teach it and utilize its great power to strengthen yourself and others. 
Lawsonomy is the fountain of intelligence and one must open the mind to drink it in, just as one must open the mouth to drink in water. 
So read Lawsonomy slowly and thoughtfully, over and over again and again, as it is the base of life and if you do not start from the base then whatever you learn is of an unstable quality. 
God has decreed that mankind must move onward and upward to a much higher plane of intelligence than heretofore reached. 
Lawsonomy is the means by which mankind can reach that higher plane.  
Life always was and always will be.  
There never was any more nor any less life throughout space than there is now. 
Nothing can be taken from nor be added to life although it is in a continual state of readjustment. 
Life is everywhere and in everything. 
The object of Life is to create and develop intelligence to the highest degree of usefulness. 
Life is divided into three main parts, all dependent upon each other.  
Distinctive in nature but cooperative in purpose they are known as physical, mental and spiritual manifestations. 
The physical manifestation of life is that part pertaining to matter and the movement thereof.  
The mental manifestation of life is that part that develops consciousness through the organization and utilization of material things.  
The spiritual manifestation of life is that part that directs constructive planning towards purification and perfection of purpose. 
A thorough knowledge of both physical and mental manifestations is necessary before spirituality can be understood.  
Just as perfect mental efficiency cannot be had in an inefficient physical thing, neither can efficient spirituality be had in an inefficient mental thing.  
Spirituality therefore aims to develop the highest type of physical and mental things.  
The scope of life is graduated according to the consciousness developed through the power of the mental system; the sense of perception being graded to the scale needed in each living thing. 
Innumerable living, moving bodies are constantly swirling about within an inch of man's eye which he cannot see because the scope of his sight is developed within a scale most suitable for his own needs. 
Billions of living things fly about the point of a man's eyebrow without knowing there is such a thing as a man nor understanding the size or nature of an eyebrow.  
Man, the solar system and the entire visible universe, as far as man's sight and understanding is concerned, pass through greater living things without knowing anything about them.  
The magnitude and minuteness of living things have no limits.  
The principles of life are simple but immutable. 
Although there is constant readjustment of the manifestations of life the laws that govern those readjustments are unchangeable. 
The different phases and divisions of life are limitless.  
The two agents that cause the readjustments of manifestations of life are constructiveness and destructiveness.  
Constructiveness builds up and destructiveness tears down. 
Without construction and destruction there could be no readjustment in the manifestations of life.  
So life without beginning or end, goes along through innumerable phases, always adhering to unchangeable laws and governed by a supreme being whom we call God and whose laws I will make as plain and understandable as the human language will permit and the human intellect will be able to grasp.  
The physical manifestation of Life is dependent upon three fundamentals�matter�movement�space.  
There could be no movement without matter. 
There could be no matter without space.  
Without matter space would be devoid of all physical life.  
Space is the home of life.  
It is a house without rooms or walls or boundaries of any kind. 
Space extends everywhere and contains everything.  
It is the place without limits where life can roam forever in changing forms according to unchangeable natural laws.  
Space always was, is now and always will be. 
It had no beginning and it will have no end. 
It was not created, nor can it be destroyed.  
It is eternal. 
Space has no size, shape or center.  
It has no inside or outside. 
It has not latitude nor longitude nor time.  
It is without limits in largeness and smallness.  
Space is immovable.  
When living things attempt to measure space it is done by comparing distance between objects that come within the scope of their own sight. 
In my book CREATION I called attention to the following absolute facts:. 
If Space extends everywhere then it can have no limits; it can have no boundaries of any kind.  
If it were not so, how could that which extends everywhere be enclosed? If Space were enclosed then it would not extend everywhere. 
If Space extends everywhere and cannot be bounded, then it can have no size, for that without limits cannot be measured. 
If Space has no size and cannot be measured, then it can have no shape. 
If Space extends everywhere without limits and has no size or shape, then there can be no direction in Space.  
If Space is not limited to size and has no shape or directions, then it can have no center. 
If Space has no size, shape, directions or center, and cannot be measured, then straight lines, planes, squares, cubes, triangles or circles cannot be used to describe Space. 
If Space is not limited to size and has no shape, direction or center, and its largeness is unbounded, then there can be no limits or boundaries to the smallness of Space. 
As Space extends everywhere and has no size, shape, direction, largeness or smallness, there can be no inside nor outside to Space. 
Space, which extends everywhere and contains everything, could have no beginning. 
For, if Space extends everywhere and contains everything, what could it have begun from?. 
Space, which extends everywhere and contains everything, can have no end.  
For, if Space extends everywhere and contains everything, what could it end with?.  
If Space had no beginning and can have no end, then there is no such condition as Time throughout Space. 
Space is immovable.  
For, if Space extends everywhere, where could it move to?. 
It is difficult for the human mind, developed through observance of familiar objects within reach of the senses, to grasp the idea that Space has no size, shape, directions, measurements, inside or outside, time or movement, but to be able to understand the cause of life and action, one must begin to think from these basic premises or one's work in physics, economics, mechanics and natural laws will be set upon the quicksands of theory, uncertainty and fallacy. 
Matter is composed of substances of different density.  
Density has limitless variability and is everywhere in space. 
Matter is the physical contents of space that takes shape, moves about and changes from one thing to another.  
Substances combine and take various forms according to immutable laws.  
All substances are composed of substances without end.  
Solids, liquids, air, gases, heat, light, electricity and sound are made up of different proportions of different substances. 
A ray of light too small for the naked eye of man to see is made up of a number of substances each of which is composed of substances. 
As space has no size there can be no limit to the smallness of things and those contents of space which appear small to the eye of man are large to the formations that compose them.  
The Earth is large to man but small when compared to the Solar System.  
But the Solar System is small when compared to the Universe. 
So the contents of space obtain size only when one thing is compared with another. 
A difference in density is caused by various substances taking up more or less space.  
Substances of greater density take up less space and substances of lesser density take up more space. 
Greater density in space is mass and lesser density in space is volume. 
Matter is separable without limit. 
There is no thing in space that cannot be divided and subdivided. 
So-called wise men thought that the atom was the smallest bit of matter in existence and that it could not be divided. 
Then later other wise men found that the electron was smaller than the atom. 
They, however, then decided that the electron was the smallest thing in existence and that it could not be divided.  
But I say that the electrons cannot only be divided into parts but that its constituents can also be divided and subdivided.  
Elements are the substances that compose a formation or the substance in which a formation is immersed. 
Man first began to notice the elements that affected his senses, such as light, heat, cold, sound, gases, air and water. 
Little by little man extended his range of vision until he realized that the elements affecting his senses were also composed of elements. 
Now, man partially understands the nature of certain elements that make up the substances of his own body as well as the nature of the elements that compose air, water, gases and light.  
With the magnifying glass man is enabled to enlarge minute particles that his naked eye cannot see.  
But hundreds of years elapsed from the time man first learned that he could see these microscopic particles through a magnifying glass and the time he began to realize that they played an important part in life. 
Man's perspective of life will be enlarged as he increases his range of vision.  
Man must learn that the elements composing air, light, heat, cold, electricity and sound are also made up of elements.  
It is the proportions of different elements that make up formations that cause the difference in their density and their nature. 
Man may be made up of sixteen different elements and these same sixteen elements may be found in different animals, fish and plants, but the difference in proportions of the elements that constitute the different structures is what makes the difference in the structures.  
Man may find the same elements in the air that he finds in water, but it is the difference in the proportions of their constituents that causes the difference in their nature and density.  
Man may find the same constituents in solids that he finds in light, but the difference in proportions of these constituents is what makes the difference in their nature and density.  
Many kinds of atoms may contain electrons, but it is the difference in the proportions of their constituents that makes the difference in their nature and density.  
Many different kinds of electrons may contain the same minute formations, but it is the difference in their proportions that makes the difference in their nature and density. 
So, by and through the different proportions of elements brought together in formations, density takes on different qualities and quantities which expand or contract in volume or mass and make possible the movement and changeability of matter and the physical manifestations of life.  
A formation is a collection of substances that take definite shape.  
Space is not a formation, because, having no boundaries it can have no shape. 
The contents of Space take different shapes because of a difference in density. 
All formations are in a state of continual change and no thing in Space remains the same owing to innumerable currents passing through them which adds to and takes from their structures. 
Space, without size, recognizes no limits to the size of its contents, and size in formations is only comparative.  
Formations are composed of formations without end.  
When a current reaches its terminal or point of suction which draws it in a certain direction, and it can go no further for lack of ability to penetrate another substance of equal or different density, a swirl is caused in which the moving substances rush round and round and cause extraordinary pressure in their attempt to reach space with lesser density. 
Thus a new formation is created; in the center of which has been trapped the point of suction, or vacuum or nuclei, which contains the power to draw into it, or toward it, substances of greater density.  
In a living formation, the nature of its covering is formed so that it will expand or contract in accordance with the life or growth of it.  
In accordance with the nature of the substances which enter into the formation, together with the nature of the substances through which the body must penetrate or depend upon for movement, the size and shape, and action of the formation depends. 
The length of life of any formation depends upon the length of time the enclosed power of suction can withstand the pressure of surrounding substances.  
Penetrability makes possible an organization of various matter and functions within a formation in which both internal suction and pressure prevail.  
Through this process the interior of the formation with its organized parts can be kept alive or made to expand or grow by drawing into itself, by the power of suction, such substances as are necessary for the purpose, while the internal power of pressure forces out of the formation the waste substances refused by it.  
This interior organization constructs itself so that it can draw in and force out of itself the right quantity of substances to keep balanced with the external substances in which it is immersed, and thereby equalizes pressure from without, with pressure from within.  
So a center of Suction and Pressure is established in all living formations that maintain an equilibrium. 
Different formations have different internal organizations, the complexity of which are determined by their different needs and the different uses to which they are put.  
Collections of formations of one density flowing as a current will move along with it the formations of another density.  
The Solar System is a formation which was created by a vacuum, or space with lesser density, drawing toward it substances of greater density. 
These substances of greater density being unable to reach the center of the vacuum rushed around and around it in swirling currents until the different substances combined and organized themselves into an entity with internal currents and formations of different density, all of which were held together by Suction. 
Internal Suction and Pressure then established an equilibrium in which pressure from within equalized pressure from without and the Solar System then became balanced with the current in which it is immersed and flows along through the heavens. 
All formations must be fed with sustaining substances in order to live and this feeding process is maintained by Suction which draws in from without and Pressure which squeezes out from within. 
In its organization the Solar System established points of ingress and egress through which sustaining substances could be drawn into it from without and waste substances could be squeezed out from within.  
All formations in order to live must have a center of Suction and Pressure, a central point from whence equalized power can be established to furnish movement to the different currents and organized parts within it. 
In the Solar System the Sun is the center of Suction and Pressure and draws into itself by Suction and forces out of itself by Pressure currents of such substances as are required to sustain the entire organization.  
Different formations move around the Sun in currents of various density.  
Each formation has a useful work to perform.  
In fact, everything in existence has some useful purpose. 
The Earth, the home of man, is a formation, created in the beginning by substances of greater density trying to reach space with lesser density in which a swirling movement was effected and the substances organized into a living body. 
The interior of the Earth is organized into different currents and functions which are controlled by a center of Suction and Pressure that maintain an equilibrium through the equalization of Suction and Pressure. 
The Earth, like any other living formation, must be fed, and its sustaining substances are drawn into it by Suction and the waste substances are squeezed out of it by Pressure. 
These substances are, of course, very finely composed and are able to penetrate the crust of the Earth at all points, although the chief point of ingress for the Earth's sustenance is at the North End, and the chief point of egress for waste matter is at the South End of the Earth. 
This fact is made evident by the needle of a compass which points north showing that to be the direction where the greatest internal Suction of the Earth takes place.  
Furthermore, this needle will incline downward when a compass is placed over the area which comprises what I call the mouth of the Earth.  
This would indicate that the needle of a compass contains a considerable quantity of the elementary.  
substances from which the life of the earth depends for sustenance, and those substances are being drawn towards the center of Suction. 
The length of life of the earth will be determined by its own power of suction which causes it to hold together.  
External pressure, however, will gradually squeeze the Earth to nothingness and its contents will pass into other formations. 
By the same law all formations, large or small, and of every nature whatsoever are decomposed.  
The theory advanced by eminent astronomers that the Earth was originally a part of the Sun and was thrown out into Space, and that the Moon was originally a part of the Earth shaken from it by a tidal wave, is too absurd for serious-minded astronomers to sanction in textbooks any longer. 
The Moon is a living formation created in the same manner as the Solar System, the Sun, the Earth, or an atom, from substances of greater density surrounding a vacuum, or space of lesser density.  
The Moon is an excellent example of a formation that is in a declining stage, as far as its power of Suction is concerned.  
It can no longer draw into itself life-giving substance in sufficient quantities to offset the destructive forces of external Pressure, and so it is gradually passing away. 
It has only about one-sixth of the internal Suction power of the Earth, which is insufficient to hold to it either air or water. 
An example showing how the life of a formation is affected by the power of Suction can be had by comparing the Moon, the Earth and Jupiter.  
Jupiter is a growing formation, the Earth is a matured formation and the Moon is a formation that is in a state of decline.  
The greater part of the Moon's Suction power has been expended and it moves upon its axis slowly and can no longer draw the life-giving substances it needs in large enough quantities to properly sustain itself. 
It has but one-sixth the Suction power of the Earth and only enough power to turn upon its axis once to every twenty-seven times the Earth turns upon its axis. 
The Earth is in a ripe and healthy condition, with sufficient Suction power to draw into its body such external substances as are needed to sustain it.  
It also has substantial mass development surrounding it and an atmosphere with which to gasify and digest the solid lumps of material that it is continually drawing to it and assimilating.  
Jupiter, on the other hand, is in a growing state and has much greater Suction power than the Earth. 
Jupiter has not yet organized its internal structure to its highest degree of efficiency and it lacks the solidity and settled condition of the Earth. 
Still in a state of youthful and bubbling vitality Jupiter turns upon its axis once every ten hours according to man-made time.  
Or it turns 2.  
4 times upon its own axis for each time the Earth turns upon its axis. 
That means that the surface of Jupiter moves at tremendous swirling speed when compared to the swirling movement of the Earth's surface because Jupiter is 1,300 times larger than the Earth. 
On account of its larger dimensions and greater Suction power, Jupiter requires enormously more food and fuel to sustain it than does the Earth and therefore needs a larger channel to move in than the Earth.  
For that reason Jupiter's orbit around the Sun is greater than that of the Earth and the current in which it flows is larger than the current in which the Earth flows around the Sun.  
This fact is plainly established by the distance Jupiter is away from his nearest planetary neighbor, Mars, who travels in his own current around the Sun 300,000,000 miles away, as compared with the distance of 34,000,000 miles which separates Mars from his nearest neighbor, the Earth.  
As he lives and grows, Jupiter consumes prodigious quantities of Solar substances, drawn together by his enormous Suction power. 
A large share of the immense quantity of debris (meteors, etc.) that are drawn into the Solar System for sustenance are consumed by Jupiter in their raw state, assimilated, and turned into the currents of gases which give him his internal power and action. 
There is no limit in largeness or smallness of formations, but their creation, development and movement are all regulated by the same law�Penetrability�and its two factors, Suction and Pressure.  
There can be in Space, which knows no largeness, formations a million times as large as the Solar System, and there can also be in Space, which knows no smallness, formations a million times as small as an electron.    
</blockquote>
    
    `,
    check: checkSolution(
      '$2y$06$ggTN68X4uTppxT5T.YFBp.Hsv43LpRrm4yguvlMdIgucPoYWY9Mre'
    ),
  },
  /*{
    id: 205,
    pos: { x: 125, y: 340 },
    title: 'Didactic Text 4 ?',
    deps: [132],
    html: `
      <p>NOT SOLVED
      </p>
    
    `,
    check: checkSolution('')
  },*/
  {
    id: 127,
    pos: { x: 260, y: 165 },
    title: 'Didactic Text',
    deps: [105],
    html: `
      <p>Examine the text below. It appears to be nothing to do with a hacker challenge. This tells you that the answer is hidden somewhere inside it. Without any clues, it's difficult to separate the signal from the noise. In this case, our text is a modified version of something famous that you should be able to locate. Once you find the original, you can calculate the difference.
      </p>
      
      <p><i>Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all the men are created equal.
      </i></p>
      
      <p><i>Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure. We are met on a great battle-field of that war. We have come to dedicate a portion of that field, as a final resting place for those who here gave their lives that that nation might live. It is altogether fitting and proper that we should do this solution.
      </i></p>
      
      <p><i>But, in a larger sense, we can not dedicate -- we can not consecrate -- we can not hallow -- this ground. The brave men, living and dead, who struggled here, have consecrated it, is far above our poor power to add or detract. The world will little note, nor long remember what we say here today, but it can never forget what they did here. It is for us the living, rather, to be dedicated here to the brave unfinished work which they who fought here have thus far so nobly advanced. It is rather for us solvers to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth. 
      </i></p>
    
    `,
    check: checkSolution(
      '$2y$06$iaiVvLUmNMKmYKnxeS7rjuGmTLcri6iH8Pw5OgY4THZqppEHdPoUC'
    ),
  },
  {
    id: 156,
    pos: { x: 345, y: 185 },
    title: 'Didactic XOR',
    deps: [105],
    html: `
      <p>Let's take the following byte, expressed in hexadecimal:
      </p>
      
      <p><code>9f</code></p>
      
      <p> Please XOR this with the following byte:
      </p>
      
      <p><code>c7</code></p>
      
      <p>Now, what is the ASCII character of the result? 
      </p>
    
    `,
    check: checkSolution(
      '$2y$06$4YXPDj0biJ62rNcGrfB3BeUHERuGm4MKc4zq2zkwPhkvwHKWpn4te'
    ),
  },
  {
    id: 130,
    pos: { x: 300, y: 250 },
    title: 'Didactic Text 2',
    deps: [127],
    html: `
      <p>Here we see a different method of hiding signal in text. This time, no words have been added to the original. But something else is significant with the presentation...
      </p>
      
      <p><span style="font-size:x-large;font-family:'Brush Script MT',Phyllis,'Lucida Handwriting','Monotype Corsiva',cursive">
Thy raiment waxed not old upon thee, neither did thy foot swell, these forty years. And it shall be, when the officers have made an end of speaking unto the people that they shall make captains of the armies to lead the people. And it shall be, if thou have no delight in her, then thou shalt let her go whither she will; but thou shalt not sell her at all for money, thou shalt not make merchandise of her, because thou hast humbled her. Look down from thy holy habitation, from heaven, and bless thy people Israel, and the land which thou hast given us, as thou swarest unto our fathers, a land that floweth with milk and honey. Now therefore write ye this song for you, and teach it the children of Israel: put it in their mouths, that this song may be a witness for me against the children of Israel. But Jeshurun waxed fat, and kicked: thou art waxen fat, thou art grown thick, thou art covered with fatness; then he forsook God which made him, and lightly esteemed the Rock of his salvation. And I commanded you at that time all the things which ye should do. When a man hath taken a new wife, he shall not go out to war, neither shall he be charged with any business: but he shall be free at home one year, and shall cheer up his wife which he hath taken. When a man hath taken a wife, and married her, and it come to pass that she find no favour in his eyes, because he hath found some uncleanness in her: then let him write her a bill of divorcement, and give it in her hand, and send her out of his house. They shall call the people unto the mountain; there they shall offer sacrifices of righteousness: for they shall suck of the abundance of the seas, and of treasures hid in the sand. Cursed shalt thou be when thou comest in, and cursed shalt thou be when thou goest out. 
</span></p>
    
    `,
    check: checkSolution(
      '$2y$06$fArSSCIzRrTtNhcZUxPqgOKPWENQwQEiDwlAFRKG1g/6/F59/OkJ2'
    ),
  },
  {
    id: 139,
    pos: { x: 270, y: 320 },
    title: 'Didactic Vampire Text',
    deps: [127],
    html: `
      <p>You must discover what is significant in the following text:
      </p>
      
      <p>when i found that i was a prisoner a sort of wild feeling came over
me.  i rushed up and down the stairs, trying every door and peering
out of every window i could find, but after a little the conviction of
my helplessness overpowered all other feelings.  when i look back
after a few hours i think i must have been mad for the time, for i
behaved much as a rat does in a trap.  when, however, the conviction
had come to me that i was helpless i sat down quietly, as quietly as i
have ever done anything in my life, and began to think over what was
best to be done.  i am thinking still, and as Yet have come to no
definite conclusion.  Of one thing only am i certain.  that it is no
use making my ideas known to the count.  he knows well that i am
imprisoned, and as he has done it himself, and has doubtless his own
motives for it, he would only deceive me if i trusted him fully with
the facts.  so far as i can see, my only plan will be to keep my
knowledge and my fears to myself, and my eyes open.  i am, i know,
either being deceived, like a baby, by my own fears, or else i am in
desperate straits, and if the latter be so, i need, and shall need,
all my brains to get through.

i had hardly come to this conclusion when i heard the great door below
shut, and knew that the count had returned.  he did not come at once
into the library, so i went cautiously to my own room and found him
making the bed.  this was odd, but only confirmed what i had all along
thought, that there are no servants in the house.  when later i saw
him through the chink of the hinges of the door laying the table in
the dining room, i was assured of it.  for if he does himself all
these menial offices, surely it is proof that there is no one else in
the castle, it must have been the count himself who was the driver of
the coach that brought me here.  this is a terrible thought, for if
so, what does it mean that he could control the wolves, as he did, by
only holding Up his hand for silence?  how was it that all the people
at bistritz and on the coach had some terrible fear for me?  what
meant the giving of the crucifix, of the garlic, of the wild Rose, of
the mountain Ash?

bless that good, good woman who hung the crucifix round my Neck!  for
it is a comfort and a Strength to me Whenever i touch it.  it is odd
that a thing which i have been taught to regard with disfavour and as
idolatrous should in a time of loneliness and trouble be of help.  is
it that there is something in the Essence of the thing itself, or that
it is a medium, a tangible help, in conveying memories of sympathy and
comfort?  some time, if it may be, i must examine this matter and try
to make up my mind about it.  in the meantime i must find out all i
can about count dracula, as it may help me to understand.  tonight he
may talk of himself, if i turn the conversation that way.  i must be
very careful, however, not to awake his suspicion.


midnight.--i have had a long talk with the count.  i asked him a few
questions on transylvania history, and he warmed up to the subject
wonderfully.  in his speaking of things and people, and especially of
battles, he spoke as if he had been present at them all.  this he
afterwards explained by saying that to a boyar the pride of his house
and name is his own pride, that their glory is his glory, that their
fate is his fate.  whenever he spoke of his house he always said "we",
and spoke almost in the plural, like a king speaking.  i wish i could
put down all he said exactly as he said it, for to me it was most
fascinating.  it seemed to have in it a whole history of the country.
he grew excited as he spoke, and walked about the Room pulling his
great white Moustache and grasping anything on which he laid his hands
as though he would crush it by main strength.  one thing he said which
i shall put down as nearly as i can, for it tells in its way the story
of his race.

"we szekelys have a right to be proud, for in our veins flows the
blood of many brave races who fought as the lion fights, for lordship.
here, in the whirlpool of european races, the Ugric tribe bore down
from iceland the fighting Spirit which Thor and wodin gave them, which
their berserkers displayed to such fell intent on the seaboards of
europe, aye, and of asia and africa too, till the peoples thought that
the werewolves themselves had Come.  here, too, when they came, they
found the huns, whose warlike fury had swept the Earth like a living
flame, till the dying peoples held that in their veins Ran The blood
of those old witches, who, expelled from scythia had mated with the
devils in the desert.  fools, fools!  what devil or what witch was
ever so great As attila, whose blood Is in these veins?"  he held up
his arms.  "is it a wonder that we were a conquering race, that we
were proud, that when the magyar, the lombard, the avar, the bulgar,
or the turk poured his thousands on our frontiers, we drove them back?
is it strange that when arpad and his legions swept through the
hungarian fatherland he found us here when he reached the frontier,
that the honfoglalas was completed there?  and when the hungarian
flood swept eastward, the szekelys were claimed as kindred by the
victorious magyars, and to us for centuries was trusted the guarding
of the frontier of turkeyland.  aye, and more than that, endless duty
of the frontier guard, for as the turks say, 'water sleeps, and the
enemy is sleepless.'  who more gladly than we throughout the four
nations received the 'bloody sword,' or at its warlike call flocked
quicker to the standard of the king?  when was redeemed that great
shame of my Nation, the shame of cassova, when the flags of the
wallach and the magyar went down beneath the crescent?  who was it but
one of my own race who as voivode crossed the danube and beat the turk
on his own ground?  this was a dracula indeed!  woe was it that his
own unworthy brother, when he had fallen, sold his people to the turk
and brought the shame of slavery on them!  was it not this dracula,
indeed, who inspired that other of his race who in a Later age again
and again brought his forces over the great river into turkeyland,
who, when he was beaten back, came again, and again, though he had to
come alone from the bloody field where his troops were being
slaughtered, since he knew that he alone could ultimately triumph!
they said that he thought only of himself.  bah!  what good are
peasants without a leader?  where ends the war without a brain and
heart to conduct it?  again, when, after the battle of mohacs, we
threw off the hungarian Yoke, we of the dracula Blood were amongst
their leaders, for our spirit would not brook that we were not free.
ah, young sir, the szekelys, and the dracula as their heart's blood,
their brains, and their swords, can boast a record that mushroom
growths like the hapsburgs and the romanoffs can never reach.  the
warlike days are over.  blood is too precious a thing in these days of
dishonourable peace, and the glories of the great races are as a tale
that is told."

it was by this time close on morning, and we went to bed.  (mem., this
diary seems horribly like the beginning of the "arabian nights," for
everything has to break off at cockcrow, or like the ghost of hamlet's
father.)


12 may.--let me begin with facts, bare, meager facts, verified by
books and figures, and of which there can be no doubt.  i must not
confuse them with Experiences which will have to rest on my own
observation, or my memory of them.  last evening when the count came
from his room he began by asking me questions on legal matters and on
the doing of certain kinds of business.  i had Spent the day wearily
over books, and, simply to keep my mind occupied, went over some of
the matters i had been examined in at lincoln's inn.  there was a
certain method in the count's inquiries, so i shall try to put them
down in sequence.  the knowledge may somehow or some time be Useful to
me.

first, he asked if a man in england might have two solicitors or more.
i told him he might have a dozen if he wished, but that it would Not
be wise to have more than one Solicitor engaged in one transaction, as
only one could act at a time, and that to change would be certain to
militate against His Interest.  he seemed thoroughly to understand,
and went on to ask if there would be any practical difficulty in having
one man to attend, say, to banking, and another to look after
shipping, in case local help were Needed in a place far from the home
of the banking solicitor.  i asked to Explain more fully, so that i
might not by any chance mislead him, so he said,

"i shall illustrate.  your friend and mine, mr. peter hawkins, from
under the shadow of your beautiful cathedral at exeter, which is far
from london, buys for me through your good self my place at london.
good!  now here let me say frankly, lest you should think it strange
that i have sought the services of one so far off from london instead
of some one resident there, that my motive was that no local interest
might be served save my wish only, and as one of london residence
might, perhaps, have some purpose of himself or friend to serve, i
went thus afield to seek my agent, whose labours should be only to my
interest.  now, suppose i, who have much of affairs, wish to ship
goods, say, to newcastle, or durham, or harwich, or dover, might it
not be that it could with more ease be done by consigning to one in
these ports?"
      </p>
    
    `,
    check: checkSolution(
      '$2y$06$y0XtCj9WOEIRaYAiLcidV.HWXkK861IJPoVP5Pe6Rr26U74H7o7au'
    ),
  },
  {
    id: 140,
    pos: { x: 205, y: 360 },
    title: 'Didactic Text Combo',
    deps: [139],
    html: `
      <p>Let's try a combination, building on what you have learned in other challenges:
      </p>
      
      <p>in cryptography, a substitution cipher is a method of encryption by which units of plainteXt are suBstituted with ciphertext according to a regular system; the "units" may be single letters (the most common), pairs of letters, triplets of letters, mixtures of the above, and so forth. the receiver deciphers the text by performinG an inverse substitution.

substitution ciphers can be compared with tRansposition ciphers. in a transposition cipher, the units of the plaintext are rearranged in a different and usually quite complex order, but the units themselves are left unchanged. by contrast, in a substitution cipher, the units of the plaintext are retained in the same sequence in the ciphertext, but the units themselves are altered.

there are a number of different types of substitution cipher. if the cipher operates on single letters, it is termed a simple substitution cipher; a cipher that operates on larger groups of letters is termed polygraphic. a monoalphabetic cipher uses fixed substitution over the entire message, Whereas a polyalphabetic cipher uses a number of substItutions at different times in the message such as with homophones, where a unit from the plaintext is mapped to one of several possibilities in the Ciphertext.

substitution over a sinGle letter simple substitution can be Demonstrated by writing out the alphabet in some order to represent the substitution. this is termed a substitution alphabet. the cipher alphabet may be shifted or reversed (creating the caesar and atbash ciphers, respectively) or scrambled in a more complex fashion, in which case it is called a mixed alphabet or deranged alphabet. traditionally, mixed alphabets are created by first writing out a keyword, removing repeated letters in it, then writing all the remaining letters in the alphabet.

a disadvantage of this method of derangement is that the last letters of the alphabet (which are mostly low freQuency) tend to stay at the end. a stronger way of constructIng a mixed alphabet is to perform a columnar transposition on the ordinary alphabet using the keyword, but this is not often done.

although the number of possible keys is very large (26! = 288.4, or about 88 bits), this Cipher is not very strong, beinG easily broken. provided the message is of reasonable length (see below), the cryptanalyst can deduce the probable meaning of the most common symbols by analyzing the frequency distRibution of the cipherteXt frequency analysis. this allows formation of partial words, which can be tentatively filled in, progressively expanding the (partial) solution (see frequency analysis for a demonstration of this). in some cases, underlying words can also Be determined from the pattern of their letters; for example, attract, osseous, and words with those two as the root are the only common enGlish words with the pattern abbcaDb. many people soLve such ciphers for recReation, as With cryptogram puzzles in the newspaper.

accordinG to the unicity distance of english, 27.
      </p>
    
    `,
    check: checkSolution(
      '$2y$06$5qNIE0gLHSyP0NoRTEJUquar.qh9AErcQjPKYpzlm/p1qPfuUr6bG'
    ),
  },
]

/* TEMPLATE
 * 
  
  {
    id: 205,
    pos: { x: 130, y: 340 },
    title: 'Didactic Text 2',
    deps: [132],
    html: `
      <p>TODO
      </p>
    
    `,
    check: checkSolution('')
  },
  
*/
