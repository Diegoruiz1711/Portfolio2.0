    import { createContext, useEffect, useState } from "react";
    import { useNavigate } from "react-router-dom";
    import i18next from 'i18next';
    import WrongNumberModal from "../components/modals/WrongNumberModal/WrongNumberModal";


    export const WebContext = createContext();

    const WebProvider = ({ children }) => {
        // useStates
        const [codeValue, setCodeValue] = useState(''); // Código en visor de acceso
        const [carrusel, setCarrusel] = useState(0); //Info sobre codigos de acceso
        const [accessLight, setAccessLight] = useState(false); //Switch para la luz de acceso
        const [activeModal, setActiveModal] = useState(null) //gestiona el modal AboutMe
        const [doorsOpen, setDoorsOpen] = useState(false); //Gestiona la apertura de las puertas
        const [doorsClose, setDoorsClose] = useState(false) //Gestion para cierre de puertas
        const [redirectPath, setRedirectPath] = useState('/'); //redirecciona a la pagina segun el código
        const [activeComponent, setActiveComponent] = useState(null); //muestra en pantalla la formacion seleccionada
        const [selectedInstitute, setSelectedInstitute] = useState(null); //selecciona el instituo a mostrar
        const [educationZIndex, setEducationZIndex] = useState(7); //Establece el Z-index de los componentes para que quede por encima una ez abiertas las puertas
        const [isExitClicked, setIsExitClicked] = useState(false) //Estado para la funcion de salida de la pagina
        const [selectedLanguage, setSelectedLanguage]= useState('Esp');
        const [isLightTheme, setIsLightTheme] = useState(true);


        // functions
        const navigate = useNavigate();

        const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, String.fromCodePoint(0x2190), 0, 'CE'];

        useEffect(() => {
            const initialModalName = 'startmodal';
            setActiveModal(initialModalName);
        }, []);

        const carruselContent = [
            {
                id: 0,
                text: 'home',
                path: '/',
                code: '4657'
            },
            {
                id: 1,
                text: 'skills',
                path: '/skills',
                code: '7298'
            },
            {
                id: 2,
                text: 'education',
                path: '/education',
                code: '4137'
            },
            {
                id: 3,
                text: 'projects',
                path: '/projects',
                code: '2486'
            },
            {
                id: 4,
                text: 'cv',
                path: '/cv',
                code: '5564'
            },
            {
                id: 5,
                text: 'contact',
                path: '/contact',
                code: '7413'
            }
        ];

        const openModal = (modalname) => {
            setActiveModal(modalname);
        };

        const closeModal = () => {
            setActiveModal(false);
        };

        const handleNext = () => {
            setCarrusel((prevIndex) => (prevIndex + 1) % carruselContent.length);
        };

        const handleBack = () => {
            setCarrusel((prevIndex) => (prevIndex - 1 + carruselContent.length) % carruselContent.length);
        };

        const handleAccessLight = () => {
            if (accessLight) {
                // Si la luz está verde y se clickea el switch (para cambiarla a roja)
                setDoorsClose(true); // Activa la animación de cierre de puertas
                setDoorsOpen(false); // Resetea el estado de apertura de puertas
                setEducationZIndex(7)
                setTimeout(() => {
                    setDoorsClose(false); // Resetea el estado de cierre después de la animación
                }, 2500); // Asumiendo que la animación de cierre dura 4 segundos
                setAccessLight(false); // Cambia la luz a roja
            }
        };

        const toggleComponent = (componentName) => {
            setActiveComponent((prev) => (prev === componentName ? null : componentName));
        };

        const handleInstituteClick = (institute) => {
            if (selectedInstitute === institute) {
                setSelectedInstitute(null);
            } else {
                setSelectedInstitute(institute);
            }
        };

        const toggleTheme = () => {
            setIsLightTheme((prev) => !prev)        
        };

        const handleLanguageClick = (languageCode) => {
            setSelectedLanguage(languageCode);
            const i18nLanguage = languageCode === 'Esp' ? 'es' : languageCode === 'UK' ? 'en' : 'ca';
            i18next.changeLanguage(i18nLanguage); // Cambia el idioma en i18next
        };
        const translatePageContent = (languageCode) => {
            
            if (languageCode === 'Esp') {
                setPageContent(translations.es);  
            } else if (languageCode === 'UK') {
                setPageContent(translations.en);  
            } else if (languageCode === 'Cat') {
                setPageContent(translations.ca);  
            }
        };
        //Codigo de acceso

        
        const handleAccessCode = (element) => {
            if (!isExitClicked) {
                if (element === 'CE') {
                    setCodeValue('');
                } else if (element === String.fromCodePoint(0x2190)) {
                    setCodeValue(prevCode => prevCode.slice(0, -1));
                } else {
                    const newCodeValue = codeValue + element.toString();
                    if (newCodeValue.length <= 4) {
                        setCodeValue(newCodeValue);
                    }
                }
            }
        };
        
        const handleAccessGaranted = () => {
            const currentSection = carruselContent.find((section) => section.code === codeValue);
        
            if (currentSection) {
                // Cierra las puertas si ya estaban abiertas
                if (doorsOpen) {
                    setDoorsClose(true); // Activa animación de cierre de puertas
                    setDoorsOpen(false); // Resetea el estado de apertura de puertas
                    setAccessLight(false); //Apaga las luces del switch para que se vuelvan a activar cuando se abren las puertas
                    setEducationZIndex(7); //Modifica el z-index

                    
                    // Espera 4 segundos para completar el cierre antes de redirigir y abrir nuevamente
                    setTimeout(() => {
                        // Configura la redirección
                        setRedirectPath(currentSection.path);
                        setAccessLight(true);
                        setDoorsOpen(true); // Activa animación de apertura de puertas
                        setDoorsClose(false); // Resetea el estado de cierre de puertas
                        setCodeValue(''); // Limpia el código ingresado
                        navigate(currentSection.path);
        
                        // Ajusta el z-index después de abrir las puertas
                        setTimeout(() => {
                            setEducationZIndex(10);
                        }, 2500);
                    }, 2500);
                } else {
                    // Si las puertas están cerradas, procede con la redirección y apertura directamente
                    setRedirectPath(currentSection.path);
                    setAccessLight(true);
                    setDoorsOpen(true);
                    setCodeValue('');
                    navigate(currentSection.path);
        
                    // Ajusta el z-index después de abrir las puertas
                    setTimeout(() => {
                        setEducationZIndex(10);
                    }, 2500);
                }
                openModal(false)
            } else {
                openModal('alertWrongNumber')
                setCodeValue('');
            }
        };

        // contexts 
        const contextValue = {
            isLightTheme, 
            setIsLightTheme,
            selectedLanguage,
            setSelectedLanguage,
            handleLanguageClick,
            doorsClose,
            setDoorsClose,
            educationZIndex,
            setEducationZIndex,
            toggleComponent,
            activeComponent,
            setActiveComponent,
            selectedInstitute,
            setSelectedInstitute,
            codeValue,
            handleAccessCode,
            carrusel,
            setCarrusel,
            handleBack,
            handleNext,
            carruselContent,
            numbers,
            accessLight,
            setAccessLight,
            handleAccessLight,
            handleAccessGaranted,
            activeModal,
            setActiveModal,
            openModal,
            closeModal,
            setDoorsOpen,
            setCodeValue,
            doorsOpen,
            setRedirectPath,
            redirectPath,
            handleInstituteClick,
            toggleTheme
        };

        return (
            <WebContext.Provider value={contextValue}>
                {children}
            </WebContext.Provider>
        );
    }

    export default WebProvider;
