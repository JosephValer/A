import React from "react";

type Props = {
    Heading: string;
    subHeading: string;
};

const SectionHeading = ({ Heading, subHeading }: Props) => {
    return (
        <div>
            <h1 className="sm:text-3xl text-2xl font-bold text-gray-800 text-adaptive text-center">
                {Heading}
                </h1>
            <p className="text-center mt-3 text-gray-500 text-adaptive-secondary ">
                {subHeading}
            </p>
        </div>
    );
};

export default SectionHeading;
