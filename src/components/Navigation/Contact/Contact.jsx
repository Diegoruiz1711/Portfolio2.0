import styles from './Contact.module.css';
import { useContext } from 'react';
import { WebContext } from '../../../WebContext/WebContext';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const { educationZIndex, isLightTheme } = useContext(WebContext);
    const { t } = useTranslation();

    const {
        register,
        handleSubmit,
        formState: { errors }, reset
    } = useForm();

    const onSubmit = (data) => {
        const serviceID = "service_fxktj1o";
        const templateID = "template_0iuykms";
        const userID = "YXzSf9wPcDGVAlhky";

        if (!serviceID || !templateID || !userID) {
            console.error("Faltan configuraciones de EmailJS. Verifica tus variables de entorno.");
            alert("Error de configuración. Intenta más tarde.");
            return;
        }

        emailjs
            .send(serviceID, templateID, data, userID)
            .then((response) => {
                console.log("Correo enviado exitosamente:", response);
                alert("¡Mensaje enviado con éxito!");
                reset();
            })
            .catch((error) => {
                console.error("Error al enviar el correo:", error);
                alert("Hubo un problema al enviar tu mensaje. Intenta nuevamente.");
            });
    };

    return (
        <div className={`${styles.container} ${!isLightTheme ? styles.dark : styles.light}`} style={{ zIndex: educationZIndex }}>
            <div className={styles.titlesSection}>
                <h2 className={styles.title}>{t('contact')}</h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
                {/* Nombre */}
                <div className={styles.inputGroup}>
                    <input
                        type="text"
                        id="name"
                        {...register("name", {
                            required: "El nombre es obligatorio. ",
                            minLength: { value: 2, message: "El nombre debe tener al menos 2 caracteres" },
                        })}
                        className={`${styles.floatingInput} ${errors.name ? styles.inputError : ''}`}
                        placeholder="Nombre"
                    />
                    {errors.name && <p className={styles.errorMessage}>{errors.name.message}</p>}
                </div>

                {/* Correo Electrónico */}
                <div className={styles.inputGroup}>
                    <input
                        type="email"
                        id="email"
                        {...register("email", {
                            required: " El correo electrónico es obligatorio. ",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Ingresa un correo electrónico válido",
                            },
                        })}
                        className={`${styles.floatingInput} ${errors.email ? styles.inputError : ''}`}
                        placeholder="Correo electrónico"
                    />
                    {errors.email && <p className={styles.errorMessage}>{errors.email.message}</p>}

                </div>

                {/* Mensaje */}
                <div className={styles.inputGroup}>
                    <textarea
                        id="message"
                        {...register("message", {
                            required: " El mensaje es obligatorio. ",
                            minLength: { value: 10, message: " El mensaje debe tener al menos 10 caracteres." },
                        })}
                        className={`${styles.floatingInputArea} ${errors.message ? styles.inputError : ''}`}
                        placeholder="Escribe tu mensaje aquí..."
                        cols={21}
                        rows={6}
                    ></textarea>
                    {errors.message && <p className={styles.errorMessage}>{errors.message.message}</p>}

                </div>

                {/* Botón de Enviar */}
                <button type="submit" className={styles.submitButton}>
                    {t('send')}
                </button>
            </form>
        </div>
    );
};

export default Contact;
