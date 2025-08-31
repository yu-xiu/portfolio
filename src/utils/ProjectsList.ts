import {
    PythonIcon, Scikitlearn, Googlecolab, XGBoost, SHAP, VercelIcon, Heroku, HuggingFace, FlaskIcon, FigmaIcon, Spacy, HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, TsIcon, NextIcon, MysqlIcon, MongoIcon, GdriveIcon, SocketIoIcon, RestApiIcon, PhpIcon, ViteIcon, NextAuthIcon, ReduxIcon, TailwindIcon, ZustandIcon, AstroIcon, NanostoresIcon, D3JsIcon, ReactQueryIcon, EdgeStoreIcon
} from "../assets/Icons"

import {
    XAIEmotionLogo, PoliLogo, NextmartLogo, ArmsLogo, ArmsPhpLogo, ClimateLogo, CovidtraxLogo, DaysbeyondLogo, FilmstackLogo, PikturesLogo, SrinivasLogo, XReconLogo, YoatubeLogo, VortexaLogo
} from "../assets/Logos"

import {
    XAIEmotion, PoliShots, NextmartShots, Armsv1Shots, Armsv2Shots, ClimateShots, CovidTraxShots, DaysbeyondShots, FilmstackShots, PikturesShots, SrinivasShots, XreconShots, YoatubeShots, VortexaShots, Armsv3Shots
} from "../assets/Shots"

import {
    XAIEmotionMockup, PoliMockup, ARMSv1Mockup, ARMSv2Mockup, ARMSv3Mockup, ClimateMockup, DaysbeyondMockup, SrinivasMockup, VortexaMockup, XreconMockup, YoatubeMockup
} from "../assets/Mockup"


type ProjectsListType = {
    Name: string,
    ShortDesc: string,
    Desc: string,
    Logo?: ImageMetadata,
    Shot: ImageMetadata,
    Mockup?: ImageMetadata,
    Theme: string,
    Status: string,
    Link: string,
    Source: string,
    Demo?: {
        email: string,
        password: string
    },
    Tech?: {
        title: string,
        description: string,
        icon: ImageMetadata
    }[],
    features: {
        title: string,
        description: string
    }[],
    hideProject: boolean,
    LogoSize: number,
    versions?: {
        title: string,
        version: string
    }[]
}[]

// -- PROJECTS TEMPLATE --
// {
//     Name: "TITLE",
//     ShortDesc: "SHORT_DESCRIPTION",
//     Desc: "DESCRIPTION",
//     Logo: LOGO_URL,
//     Shot: SCREENSHOT_URL,
//     Mockup: MOCKUP_URL,
//     Theme: "PROJECT_THEME_COLOR_HEX",
//     Status: "completed OR development",
//     Link: "PROJECT_URL",
//     Source: "GITHUB_URL",
//     Demo?: { 
//         email: "DEMO_EMAIL", 
//         password: "DEMO_PASSWORD" 
//     },
//     Tech: [TECH_ICONS_URL],
//     features: [{
//         title: "FEATURE_TITLE",
//         description: "FEATURE_DESCRIPTION"
//     }],
//     hideProject: false,
//     LogoSize: 50,
//     versions: [{ 
//         title: "PREV_PROJECT_TITLE", 
//         version: "VERSION_NO" 
//     }]
// },

const TechInfo = {
    Python: {
        title: "Python",
        description: "Python is a high-level, versatile programming language known for its simplicity and readability, widely used in data science, AI, web development, and beyond.",
        icon: PythonIcon
    },
    Scikitlearn: {
        title: "Scikit-learn",
        description: "Scikit-learn is a popular open-source Python library that provides simple and efficient tools for machine learning, including classification, regression, clustering, and model evaluation.",
        icon: Scikitlearn
    },
    Colab: {
        title: "Google Colab",
        description: "Google Colab is a free cloud-based platform that lets you write and run Python code in Jupyter notebooks, with built-in support for machine learning libraries and free GPU/TPU access.",
        icon: Googlecolab
    },
    XGBoost: {
        title: "XGBoost",
        description: "XGBoost is an open-source software library that implements optimized distributed gradient boosting machine learning algorithms under the Gradient Boosting framework.",
        icon: XGBoost
    },
    SHAP: {
        title: "SHAP",
        description: "SHAP (SHapley Additive exPlanations) is a game theoretic approach to explain the output of any machine learning model. It connects optimal credit allocation with local explanations using the classic Shapley values from game theory and their related extensions.",
        icon: SHAP
    },
    HTML: {
        title: "HTML",
        description: "HyperText Markup Language for creating the structure of web pages.",
        icon: HtmlIcon
    },
    CSS: {
        title: "CSS",
        description: "Cascading Style Sheets for styling the presentation of HTML documents.",
        icon: CssIcon
    },
    JavaScript: {
        title: "JavaScript",
        description: "High-level scripting language for adding interactivity to web pages.",
        icon: JsIcon
    },
    React: {
        title: "React",
        description: "JavaScript library for building user interfaces with reusable components.",
        icon: ReactIcon
    },
    Figma: {
        title: "Figma",
        description: "Figma is a cloud-based design and prototyping tool for creating user interfaces for digital products like websites and apps, emphasizing real-time collaboration for teams. Key features include design, prototyping, and design system management.",
        icon: FigmaIcon
    },
    Flask: {
        title: "Flask",
        description: "Flask is a lightweight WSGI web application framework. It is designed to make getting started quick and easy, with the ability to scale up to complex applications.",
        icon: FlaskIcon
    },
    Spacy: {
        title: "Spacy",
        description: "spaCy is an open-source library for advanced Natural Language Processing (NLP) in Python.",
        icon: Spacy 
    },
    HuggingFace: {
        title: "HuggingFace",
        description: "HuggingFace Transformers acts as the model-definition framework for state-of-the-art machine learning models in text, computer vision, audio, video, and multimodal model, for both inference and training.",
        icon: HuggingFace
    },
    Vercel: {
        title: "Vercel",
        description: "Vercel is a cloud platform that provides the tools and infrastructure for developers to build, deploy, and scale modern web applications, focusing on speed, developer experience, and global distribution.",
        icon: VercelIcon
    },
    Heroku: {
        title: "Heroku",
        description: "Heroku is a cloud Platform as a Service (PaaS) that enables developers to build, run, and manage modern applications in the cloud without needing to manage the underlying infrastructure.",
        icon: Heroku
    },
    Node: {
        title: "Node.js",
        description: "JavaScript runtime for server-side applications, enabling scalable and event-driven architecture.",
        icon: NodeIcon
    },
    TypeScript: {
        title: "TypeScript",
        description: "A superset of JavaScript adding static typing for building large-scale applications with enhanced maintainability and tooling support.",
        icon: TsIcon
    },
    Next: {
        title: "Next.js",
        description: "A React framework for server-side rendering, static site generation, and routing, offering improved performance and SEO optimization.",
        icon: NextIcon
    },
    MySQL: {
        title: "MySQL",
        description: "Open-source relational database management system for storing and managing structured data.",
        icon: MysqlIcon
    },
    MongoDB: {
        title: "MongoDB",
        description: "NoSQL database offering flexibility and scalability for storing and managing data efficiently.",
        icon: MongoIcon
    },
    GDrive: {
        title: "Google Drive API",
        description: "The Google Drive API enables developers to create applications that interact with Google Drive's cloud storage. This API allows for programmatic access to manage files and folders within a user's Google Drive.",
        icon: GdriveIcon
    },
    SocketIO: {
        title: "Socket.IO",
        description: "Real-time bidirectional communication library for building interactive web applications.",
        icon: SocketIoIcon
    },
    RESTAPI: {
        title: "REST API",
        description: "Architectural style for designing networked applications with standardized HTTP operations.",
        icon: RestApiIcon
    },
    PHP: {
        title: "PHP",
        description: "Server-side scripting language for building dynamic web applications.",
        icon: PhpIcon
    },
    Vite: {
        title: "Vite",
        description: "Modern build tooling for web development with rapid startup and hot module replacement.",
        icon: ViteIcon
    },
    NextAuth: {
        title: "NextAuth.js",
        description: "Authentication library designed specifically for Next.js applications, providing robust authentication features and seamless integration.",
        icon: NextAuthIcon
    },
    Redux: {
        title: "Redux",
        description: "Predictable state management library for JavaScript applications, enabling developers to write consistent, scalable code with ease.",
        icon: ReduxIcon
    },
    TailwindCSS: {
        title: "Tailwind CSS",
        description: "A utility-first CSS framework providing pre-designed, atomic-level utility classes for rapid UI development with minimal CSS code.",
        icon: TailwindIcon
    },
    Zustand: {
        title: "Zustand",
        description: "Tiny, fast, and scalable state management for React applications, providing a simple and intuitive API.",
        icon: ZustandIcon
    },
    Astro: {
        title: "Astro",
        description: "Frontend framework for streamlined development, integrating seamlessly with popular tools to create fast and modern websites with minimal configuration overhead.",
        icon: AstroIcon
    },
    NanoStores: {
        title: "NanoStores",
        description: "Lightweight state management library for JavaScript applications, designed for simplicity and performance to simplify state management and improve application responsiveness.",
        icon: NanostoresIcon
    },
    D3: {
        title: "D3.js",
        description: "Versatile JavaScript library for data visualization, enabling developers to create dynamic, interactive graphics and charts by binding data to DOM elements.",
        icon: D3JsIcon
    },
    ReactQuery: {
        title: "React Query",
        description: "React library for managing, caching, and synchronizing server state in web applications, providing a powerful and intuitive API for fetching and updating data.",
        icon: ReactQueryIcon
    },
    EdgeStore: {
        title: "EdgeStore",
        description: "EdgeStore is an open-source file storage service, designed for scalability and performance, with efficient updates and minimal API.",
        icon: EdgeStoreIcon
    }
};

// Common Features List
const FeatureList = {
    Responsive: {
        title: "Responsive Design",
        description: "Enjoy a seamless experience across devices with a responsive design that adapts to various screen sizes and orientations."
    },
    SEO: {
        title: "SEO Optimization",
        description: "Crafted with SEO best practices, ensuring optimal visibility on search engines. From keyword-rich content to streamlined meta tags and efficient site architecture."
    }
}

export const ProjectsList: ProjectsListType = [
    {
        Name: "XAI-Emotion",
        ShortDesc: "Predicts emotional arousal from audio features using machine learning, with SHAP-based explanations of feature importance.",
        Desc: "This project predicts arousal — a measure of emotional intensity — from audio-derived features using machine learning models. It further explains the predictions through SHAP (SHapley Additive exPlanations), highlighting the relative importance of different features. The goal is to build an AI model targeted at arousal detection and to provide transparent insights into how feature contributions affect model decisions.",
        Logo: XAIEmotionLogo,
        Shot: XAIEmotion,
        Mockup: XAIEmotionMockup,
        Theme: "#FFF",
        Status: "completed",
        Link: "https://github.com/yu-xiu/emotion-arousal-prediction-from-audio-explainable-AI",
        Source: "https://github.com/yu-xiu/emotion-arousal-prediction-from-audio-explainable-AI",
        Tech: [TechInfo.Python, TechInfo.Scikitlearn, TechInfo.Colab, TechInfo.XGBoost, TechInfo.SHAP, TechInfo.GDrive],
        features: [
            {
                title: "Exploratory Data Analysis (EDA)",
                description: "Used correlation heatmaps and scatter plots to explore feature relationships, and selected the top 10 features based on Pearson correlation."
            },
            {
                title: "Arousal Prediction",
                description: "Predicts emotional arousal levels using machine learning models (Random Forest, XGBoost, MLP Regressor)."
            },
            {
                title: "Model Optimization",
                description: "Applies GridSearchCV for hyperparameter tuning to improve predictive performance."
            },
            {
                title: "Explainable AI (XAI)",
                description: "Uses SHAP to provide feature importance and explain model decisions."
            },
            {
                title: "Interactive Analysis",
                description: "Visualizes prediction outputs and feature contributions for transparent interpretation."
            },
           
        ],
        hideProject: false,
        LogoSize: 50,
        versions: [
            { title: "XAI-Emotion", version: "1" }
        ]
    },
    {
        Name: "Poli-NLP-Classifier",
        ShortDesc: "Poli is a web application that allows users to input political posts and automatically classifies them into categories using natural language processing (NLP).",
        Desc: "Team project (4). I led NLP modeling and the inference API; modeling and fine-tuned LSTM, and shipped a full-stack demo. I owned partial data cleaning; trained and fine-tuned an LSTM; built React UI (logo, input flow, animations); implemented Flask inference APIs (model loading & tokenization); deployed on Heroku (backend) and Vercel (frontend) with cost-efficient external model storage via Google Drive.",
        Logo: PoliLogo,
        Shot: PoliShots,
        Mockup: PoliMockup,
        Theme: "#FFF",
        Status: "completed",
        Link: "https://github.com/yu-xiu/Poli_AI_Classifier",
        Source: "https://github.com/yu-xiu/Poli_AI_Classifier",
        Tech: [TechInfo.GDrive, TechInfo.Figma, TechInfo.Python, TechInfo.Scikitlearn, TechInfo.Colab, TechInfo.HuggingFace, TechInfo.Spacy, TechInfo.React, TechInfo.Flask, TechInfo.HTML, TechInfo.CSS, TechInfo.Vercel, TechInfo.Heroku],
        features: [
            {
              title: "Open-ended Input",
              description: "Users can submit any political social media post; predictions are not limited to the training dataset."
            },
            {
              title: "Bias Classification",
              description: "Classifies posts as Neutral vs. Partisan using a fine-tuned BERT model."
            },
            {
              title: "Message Type Classification",
              description: "Predicts one of: Attack, Constituency, Information, Media, Mobilization, Personal, Policy, Support."
            },
            {
              title: "Robust Preprocessing",
              description: "Removes URLs, emojis, HTML tags, and special characters via regex & NLP; includes tokenization and TF-IDF."
            },
            {
              title: "Modeling Options",
              description: "Trained and fine-tuned LSTM, GPT-2, and BERT; the production demo uses BERT for best performance."
            },
            {
              title: "Generalization",
              description: "Trained on the 2015 Crowdflower Political Social Media Posts dataset and generalizes to unseen inputs."
            },
            {
              title: "Full-stack Demo",
              description: "React frontend integrated with Flask APIs for real-time inference and results visualization."
            }
        ],
          
        hideProject: false,
        LogoSize: 50,
        versions: [
            { title: "Poli-NLP-Classifier", version: "1" }
        ]
    },
]