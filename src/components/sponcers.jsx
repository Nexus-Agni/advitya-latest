import { useEffect, useState } from 'react';
import GradientText from '../components/ui/GradientText';
import Marquee from 'react-fast-marquee';

export function Sponsors() {
    const [sponsors, setSponsors] = useState([
        { id: 1, logo: 'https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a46539001a51355604/view?project=6756a8dc000c0d24754b&mode=admin' },
        { id: 2, logo: 'https://cloud.appwrite.io/v1/storage/buckets/67a1d7b300237ca90544/files/67a46527002efeb323b2/view?project=6756a8dc000c0d24754b&mode=admin' }
    ]);

    return (
        <div className="sponsors-container overflow-hidden w-full py-4">
            <div className="pt-6">
                <div className="pt-6">
                    <GradientText className="text-left pl-4 text-6xl font-bold uppercase">
                         Our Sponsors
                    </GradientText>
                </div>
            </div>
            <div className="w-full mt-6">
                <Marquee gradient={false} speed={50} className="flex gap-0" direction="left">
                    {sponsors.concat(sponsors).map((sponsor, index) => (
                        <div key={index} className="flex-none w-3/4 md:w-2/3 px-0.5">
                            <img
                                src={sponsor.logo}
                                alt="Sponsor logo"
                                className="w-full h-48 object-contain"
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
        </div>
    );
}

