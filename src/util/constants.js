export const content = [
    {
        id: 'pulsating',
        title: 'Pulsating',
        tooltip_text: 'Click to know more and see it for yourself!',
        text: "Pulsating variables are stars showing periodic expansion and contraction of their surface layers. The pulsations may be radial or nonradial. A radially pulsating star remains spherical in shape, while in the case of nonradial pulsations the star's shape periodically deviates from a sphere, and even neighboring zones of its surface may have opposite pulsation phases.",
    },
    {
        id: 'cataclysmic',
        title: 'Cataclysmic (Explosive and Novalike) Variables',
        tooltip_text: 'Click to know more and see it for yourself!',
        text: 'These are variable stars showing outbursts caused by thermonuclear burst processes in their surface layers (novae) or deep in their interiors (supernovae). We use the term "novalike" for variables that show novalike outbursts caused by rapid energy release in the surrounding space (UG-type stars - see below) and also for objects not displaying outbursts but resembling explosive variables at minimum light by their spectral (or other) characteristics. The majority of explosive and novalike variables are close binary systems, their components having strong mutual influence on the evolution of each star. It is often observed that the hot dwarf component of the system is surrounded by an accretion disk formed by matter lost by the other, cooler, and more extended component.',
    },
    {
        id: 'binary',
        title: 'Close Binary Eclipsing Systems',
        tooltip_text: 'Click to know more and see it for yourself!',
        text: 'We adopt a triple system of classifying eclipsing binary systems: according to the shape of the combined light curve, as well as to physical and evolutionary characteristics of their components. The classification based on light curves is simple, traditional, and suits the observers; the second and third classification methods take into account positions of the binary-system components in the (MV ,B-V) diagram and the degree of inner Roche lobe filling. Estimates are made by applying the simple criteria proposed by Svechnikov and Istomin (1979).',
    },
    {
        id: 'eruptive',
        title: 'Eruptive Variable Stars',
        tooltip_text: 'Click to know more and see it for yourself!',
        text: 'Eruptive variables are stars varying in brightness because of violent processes and flares occurring in their chromospheres and coronae. The light changes are usually accompanied by shell events or mass outflow in the form of stellar winds of variable intensity and/or by interaction with the surrounding interstellar medium.',
    },
    {
        id: 'rotating',
        title: 'Rotating Variable Stars',
        tooltip_text: 'Click to know more and see it for yourself!',
        text: 'Variable stars with nonuniform surface brightness and/or ellipsoidal shapes, whose variability is caused by axial rotation with respect to the observer. The nonuniformity of surface brightness distributions may be caused by the presence of spots or by some thermal or chemical inhomogeneity of the atmosphere caused by a magnetic field whose axis is not coincident with the rotation axis.',
    },
    {
        id: 'extrinsic',
        title: '',
        tooltip_text:
            'Eclipsing binaries — where a binary star system’s brightness changes because one orbiting companion passes in front of the other.                    Rotating stars — dark or bright areas on the stellar surface may cause small changes in apparent brightness as the star rotates. Click to open the Reference.',
    },
    {
        id: 'intrinsic',
        title: '',
        tooltip_text:
            'Pulsating variables — stars which periodically expand and contract, such as Cepheids, RR Lyrae stars, RV Tauri stars and Long Period Variables.                    Eruptive variables — which have flares or mass ejections from their surface.                    Cataclysmic or explosive variables — dramatic changes in brightness are caused by violent thermonuclear events or catastrophic explosions resulting in novae or supernovae. Click to open the Reference.',
    },
];

export const brightnessSettings = {
    lightChange: 0.05,
    lowerBrightness: 0.3,
    upperBrightness: 2,
    brightnessStep: 0.03,
};

export const expansionSettings = {
    scaleChange: 0.2,
    lowerScale: 0.95,
    upperScale: 1.05,
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
};
