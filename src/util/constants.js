export const content = [
    {
        id: 'pulsating',
        title: 'Pulsating Variable Stars',
        tooltip_text: 'Click to know more and see it for yourself!',
        text: "Pulsating variables are stars showing periodic expansion and contraction of their surface layers. The pulsations may be radial or nonradial. A radially pulsating star remains spherical in shape, while in the case of nonradial pulsations the star's shape periodically deviates from a sphere, and even neighboring zones of its surface may have opposite pulsation phases.",
        link: 'http://www.sai.msu.su/gcvs/gcvs/gcvs5/vartype.htm',
    },
    {
        id: 'cataclysmic',
        title: 'Cataclysmic (Explosive and Novalike) Variables',
        tooltip_text: 'Click to know more and see it for yourself!',
        text: "Cataclysmic variables (CVs) are binary star systems that have a white dwarf and a normal star companion. These are variable stars showing outbursts caused by thermonuclear burst processes in their surface layers (novae) or deep in their interiors (supernovae). We use the term 'novalike' for variables that show novalike outbursts caused by rapid energy release in the surrounding space (UG-type stars - see below) and also for objects not displaying outbursts but resembling explosive variables at minimum light by their spectral (or other) characteristics. The majority of explosive and novalike variables are close binary systems, their components having strong mutual influence on the evolution of each star. It is often observed that the hot dwarf component of the system is surrounded by an accretion disk formed by matter lost by the other, cooler, and more extended component.",
        link: 'http://www.sai.msu.su/gcvs/gcvs/gcvs5/vartype.htm',
    },
    {
        id: 'binary',
        title: 'Close Binary Eclipsing Systems',
        tooltip_text: 'Click to know more and see it for yourself!',
        text: "In these systems, the brightness changes because one orbiting companion passes in front of the other. We adopt a triple system of classifying eclipsing binary systems: according to the shape of the combined light curve, as well as to physical and evolutionary characteristics of their components. The classification based on light curves is simple, traditional, and suits the observers; the second and third classification methods take into account positions of the binary-system components in the (M-V ,B-V) diagram and the degree of inner Roche lobe filling. Estimates are made by applying the simple criteria proposed by Svechnikov and Istomin (1979). Classification based on the shape of the light curve. Classification according to the components' physical characteristics. Classification based on the degree of filling of inner Roche lobes.",
        link: 'http://www.sai.msu.su/gcvs/gcvs/gcvs5/vartype.htm',
    },
    {
        id: 'eruptive',
        title: 'Eruptive Variable Stars',
        tooltip_text: 'Click to know more and see it for yourself!',
        text: 'Eruptive variables are stars varying in brightness because of violent processes and flares occurring in their chromospheres and coronae. The light changes are usually accompanied by shell events or mass outflow in the form of stellar winds of variable intensity and/or by interaction with the surrounding interstellar medium.',
        link: 'http://www.sai.msu.su/gcvs/gcvs/gcvs5/vartype.htm',
    },
    {
        id: 'rotating',
        title: 'Rotating Variable Stars',
        tooltip_text: 'Click to know more and see it for yourself!',
        text: 'Variable stars with nonuniform surface brightness and/or ellipsoidal shapes, whose variability is caused by axial rotation with respect to the observer. The nonuniformity of surface brightness distributions may be caused by the presence of spots or by some thermal or chemical inhomogeneity of the atmosphere caused by a magnetic field whose axis is not coincident with the rotation axis.',
        link: 'http://www.sai.msu.su/gcvs/gcvs/gcvs5/vartype.htm',
    },
    {
        id: 'hr-diagram',
        title: 'Hertzsprung-Russell diagram for nearby stars',
        tooltip_text: 'Click to know more and see it for yourself!',
        text: 'A plot of the luminosity (left vertical axis), in units of the Sun’s absolute luminosity denoted L, against the effective temperature of the star’s disk in degrees kelvin, designated K (bottom horizontal axis) for 22,000 stars in the catalogue of the HIPPARCOS satellite. This plot is known as the Hertzsprung-Russell diagram, abbreviated H-R diagram. The spectral class is also denoted (bottom horizontal axis), as well as the absolute visual magnitude (right vertical axis) and color index, B-V (top horizontal axis). Most stars, including our Sun, lie along the main sequence, which extends from the high temperature, blue-white stars at the top left to the low temperature, red stars at the bottom right. The Sun is a main-sequence star with an absolute visual magnitude MV = 4.8 and color index B-V = 0.68. The radiation from all main-sequence stars is sustained by hydrogen-burning reactions in their cores. Stars of about the Sun’s mass evolve into helium-burning red giant stars, located in the upper-right side of the diagram. Very rare, bright giant stars, and extremely scarce and luminous supergiants are found above the giant stars and along the top of the diagram. Faint and initially hot white dwarf stars are located in the lower left side. Owing to their low luminosity, these end points of stellar evolution are relatively difficult to observe. (Data points courtesy of ESA/HIPPARCOS mission.)',
        link: 'https://ase.tufts.edu/cosmos/view_picture.asp?id=1404',
    },
    {
        id: 'extrinsic',
        title: '',
        tooltip_text:
            'Eclipsing binaries — where a binary star system’s brightness changes because one orbiting companion passes in front of the other.                    Rotating stars — dark or bright areas on the stellar surface may cause small changes in apparent brightness as the star rotates. Click to know more.',
        link: 'https://astronomy.swin.edu.au/cosmos/V/Variable+Stars',
    },
    {
        id: 'intrinsic',
        title: '',
        tooltip_text:
            'Pulsating variables — stars which periodically expand and contract, such as Cepheids, RR Lyrae stars, RV Tauri stars and Long Period Variables.                    Eruptive variables — which have flares or mass ejections from their surface.                    Cataclysmic or explosive variables — dramatic changes in brightness are caused by violent thermonuclear events or catastrophic explosions resulting in novae or supernovae. Click to know more.',
        link: 'https://astronomy.swin.edu.au/cosmos/V/Variable+Stars',
    },
];

export const brightnessSettings = {
    lightChange: 0.05,
    lowerBrightness: 0.3,
    upperBrightness: 10,
    brightnessStep: 0.075,
};

export const expansionSettings = {
    scaleChange: 0.2,
    lowerScale: 0.95,
    upperScale: 1.2,
    scaleStep: 0.002,
};

export const eruptionSettings = {
    eruptChange: 0.4,
    lowerErupt: 0.7,
    upperErupt: 1.2,
    eruptStep: 0.02,
};

export const canAnimate = {
    canRotate: ['pulsating', 'rotating', 'binary'],
    canRotateIndividually: ['binary', 'cataclysmic'],
    canExpand: ['pulsating'],
    canErupt: ['eruptive'],
    canPulse: ['pulsating', 'rotating'],
};
