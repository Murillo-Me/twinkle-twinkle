export const content = [
    {
        id: 'pulsating',
        title: 'Pulsating',
        tooltip_text:
            'Informações sobre a variabilidade quando o mouse fica por cima.',
        text: "Pulsating variables are stars showing periodic expansion and contraction of their surface layers. The pulsations may be radial or nonradial. A radially pulsating star remains spherical in shape, while in the case of nonradial pulsations the star's shape periodically deviates from a sphere, and even neighboring zones of its surface may have opposite pulsation phases.",
    },
    {
        id: 'cataclysmic',
        title: 'Cataclysmic (Explosive and Novalike) Variables',
        tooltip_text:
            'Informações sobre a variabilidade quando o mouse fica por cima.',
        text: 'These are variable stars showing outbursts caused by thermonuclear burst processes in their surface layers (novae) or deep in their interiors (supernovae). We use the term "novalike" for variables that show novalike outbursts caused by rapid energy release in the surrounding space (UG-type stars - see below) and also for objects not displaying outbursts but resembling explosive variables at minimum light by their spectral (or other) characteristics. The majority of explosive and novalike variables are close binary systems, their components having strong mutual influence on the evolution of each star. It is often observed that the hot dwarf component of the system is surrounded by an accretion disk formed by matter lost by the other, cooler, and more extended component.',
    },
    {
        id: 'binary',
        title: 'Close Binary Eclipsing Systems',
        tooltip_text:
            'Informações sobre a variabilidade quando o mouse fica por cima.',
        text: 'We adopt a triple system of classifying eclipsing binary systems: according to the shape of the combined light curve, as well as to physical and evolutionary characteristics of their components. The classification based on light curves is simple, traditional, and suits the observers; the second and third classification methods take into account positions of the binary-system components in the (MV ,B-V) diagram and the degree of inner Roche lobe filling. Estimates are made by applying the simple criteria proposed by Svechnikov and Istomin (1979).',
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

export const canAnimate = {
    canRotate: ['pulsating', 'rotating', 'binary'],
    canRotateIndividually: ['binary', 'cataclysmic'],
    canExpand: ['pulsating'],
};
