'use client'

import CustomLink from "../../../CustomLink"
import { useRef } from "react";
import Contents from "../Contents";
import { Title, Heading3, Heading4 } from "../../../Formats";

export default function Tech() {
    const headings = ["The Stuff I Use", "📱 iPhone", "⌚ Apple Watch", "📝 iPad", "🖥️ Mac", "💻 Laptop", "🎧 Audio", "⌨️ Desk peripherals"].map(x => [x, useRef()]);

    return (
        <>
            <Contents headings={headings} />
            <Title title="tech" image={true} alt="Mac mini" src="https://www.apple.com/v/mac-mini/q/images/overview/hero__x8ruukomx2au_large_2x.jpg" />
            <p className="text-lg mb-6">As a student living in the digital age, tech is something I've entrenched myself into. Below are some of the digital products I use.</p>
            <Heading3 array={headings[0]} />
            <Heading4 array={headings[1]} />
            <p className="text-lg mb-6">I am currently using an iPhone 14 Pro, which is the second phone I've owned, the first one being the iPhone 11. The 3 year gap bewteen the models compelled me to make the upgrade, and the difference is certainly night and day. The difference between speed, camera quality, display, etc. has really stood out to me.</p>
            <p className="text-lg mb-6">The iPhone is the gateway to so many things Apple, and since I have so deeply integrated everything into the Apple Ecosystem, it makes it almost impossible to switch away from the iPhone lineup.</p>
            <p className="text-lg mb-6"></p>
            <p className="text-md mb-6 font-light"><em>Colour: Deep Purple, Storage: 128GB</em></p>
            <Heading4 array={headings[2]} />
            <p className="text-lg mb-6">With the iPhone, comes the Apple Watch, another device which I recently upgraded. I currently have the Apple Watch Series 8, after upgrading from a Series 3.</p>
            <p className="text-lg mb-6">Its health tracking and other features such as Apple Pay make it actually quite an useful item in my arsenal of tech products.</p>
            <p className="text-lg mb-6">For the band, I went with a graphite Milanese band which adds style and durability without being overly expensive.</p>
            <p className="text-lg mb-6"></p>
            <p className="text-md mb-6 font-light"><em>Colour: Midnight, Connectivity: GPS only</em></p>
            <Heading4 array={headings[3]} />
            <p className="text-lg mb-6">The iPad I've used for the longest time is the 2018 iPad Pro 11 inch. To me, it's the perfect combination of size and power, as well as being the ultimate relaxation device.</p>
            <p className="text-lg mb-6">With it, I have the Apple Pencil for handwriting notes and a Logitech Combo Touch for typing on the go.</p>
            <p className="text-lg mb-6">I use it at school as well to take notes and to work on digital notebooks, which allows me to have a more paperless school life. </p>
            <p className="text-lg mb-6"></p>
            <p className="text-md mb-6 font-light"><em>Colour: Space Gray, Storage: 256GB</em></p>
            <Heading4 array={headings[4]} />
            <p className="text-lg mb-6">At home, I have the M1 Mac Mini sitting on my desk. It's the first Mac I've ever owned and could not recommend it enough. Not once have I heard the fans spin up despite all the work I've done on it.</p>
            <p className="text-lg mb-6">For comparison, my laptop (which I'll mention next), had the fans blaring out even if it was just playing back a YouTube video or opening Discord.</p>
            <p className="text-lg mb-6">It's such a quality-of-life improvement which has brought not just productivity, but more peace to my workspace.</p>
            <p className="text-lg mb-6"></p>
            <p className="text-md mb-6 font-light"><em>Memory: 16GB, Storage: 256GB</em></p>
            <Heading4 array={headings[5]} />
            <p className="text-lg mb-6">The laptop I have used for the past few years is a Dell XPS 15 7590. The reason the specs are so kitted out is because:</p>
            <ol className="text-lg list-decimal list-inside mb-6">
                <li className="mb-1">It's probably going to be the laptop and computer which I use until university.</li>
                <li className="mb-1">There was a good deal, so why not?</li>
            </ol>
            <p className="text-lg mb-6">Nowadays, because I don't need to dock it, I use it at school for more intensive desktop tasks such as game development. However, because of its slow startup, loud fans and poor battery, it does prove to be an inconvenience at times, which is why I'm considering upgrading to an Apple Silicon MacBook.</p>
            <p className="text-lg mb-6">Being the only device I own not integrated in the Apple ecosystem does make it slightly unused at home, another reason why I'm considering switching from Windows to Mac.</p>
            <p className="text-lg mb-6"></p>
            <p className="text-md mb-6 font-light"><em>Memory: 32GB, Storage: 1TB</em></p>
            <Heading4 array={headings[6]} />
            <p className="text-lg mb-6">I use AirPods Pro (2nd Gen) as my main listening device. It connects rather seamlessly with all my devices which makes it so convenient to use.</p>
            <p className="text-lg mb-6">Its feature set is also rather impressive, with ANC, transparency mode and Find My on the case, I personally couldn't recommend them enough.</p>
            <p className="text-lg mb-6"></p>
            <Heading4 array={headings[7]} />
            <p className="text-lg mb-6">The monitor setup I have is slightly overkill, with it being 2 32-inch 4K Dell monitors placed side by side.</p>
            <p className="text-lg mb-6">That being said, the amount of screen real estate is especially useful where I have work on one monitor and email, messages, calendar and todos on the other.</p>
            <p className="text-lg mb-6">Mouse: I use the Logitech MX Master 3S as my mouse on my desk. It is the perfect productivity mouse, with many reprogrammable buttons and a super fast scroll wheel. I have its 3 connections paired to my Mac, iPad and laptop.</p>
            <p className="text-lg mb-6">Keyboard: I use a Keychron K1 as the keyboard for my setup. It has a low-profile, but the sound the keys and stabilisers make are not the best, so I have been thinking of upgrading.</p>
            <p className="text-lg mb-6">Webcam: I have a Logitech BRIO 4K webcam mounted on top of my monitors. To be honest, I rarely use it nowadays, but before with remote learning and lockdown, it was very useful for video calls.</p>
            <p className="text-lg mb-6">Microphone: I have a Blue Yeti Nano attached to a Rode PSA1 boom arm, and it is usually used for both remote learning and just calls with friends. Having my friends always comment on my audio quality is always a nice, endorphin releasing thing.</p>
            <p className="text-lg mb-6"></p>
            <p className="text-md mb-6 font-light"><em>Key Switches: Gateron Brown</em></p>
        </>
    )
}