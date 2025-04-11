import { Link } from 'react-router-dom';
import styles from './css/PublishGuide.module.css';

// Importación correcta de imágenes desde assets
import dropdownExample from '../../assets/images/dropdown-example.png';
import createEventOption from '../../assets/images/create-event-option.png';
import stepComplete from '../../assets/images/step-complete.png';

const PublishGuide = () => {
  return (
    <div className={styles.guideContainer}>
      <h1 className={styles.guideTitle}>Cómo Publicar tu Evento</h1>
      <p className={styles.guideSubtitle}>Sigue estos simples pasos para promocionar tu evento en nuestra plataforma</p>

      <div className={styles.stepsContainer}>
        {/* Paso 1 - Iniciar Sesión */}
        <div className={styles.stepCard}>
          <div className={styles.stepNumber}>1</div>
          <div className={styles.stepContent}>
            <h3>Iniciar Sesión</h3>
            <p>
              {localStorage.getItem('token') ? (
                <span className={styles.verifiedStep}>
                  <img src={stepComplete} alt="Paso completado" className={styles.verifiedIcon} />
                  ¡Ya has iniciado sesión! Puedes continuar al siguiente paso.
                </span>
              ) : (
                <>
                  Necesitas una cuenta para publicar eventos. 
                  <Link to="/login" className={styles.highlightLink}> Inicia sesión</Link> o 
                  <Link to="/register" className={styles.highlightLink}> regístrate</Link> si no tienes una.
                </>
              )}
            </p>
          </div>
        </div>

        {/* Paso 2 - Menú de Usuario */}
        <div className={styles.stepCard}>
          <div className={styles.stepNumber}>2</div>
          <div className={styles.stepContent}>
            <h3>Acceder a tu Perfil</h3>
            <p>
              Haz clic en tu nombre de usuario en el menú superior derecho para abrir el menú desplegable.
            </p>
            <img 
              src={dropdownExample} 
              alt="Menú desplegable del usuario" 
              className={styles.stepImage}
            />
          </div>
        </div>

        {/* Paso 3 - Opción Crear Evento */}
        <div className={styles.stepCard}>
          <div className={styles.stepNumber}>3</div>
          <div className={styles.stepContent}>
            <h3>Seleccionar "Mi Perfil"</h3>
            <p>
              Te aparecera la opcion de "Agregar Evento".
            </p>
            <img 
              src={createEventOption} 
              alt="Opción Crear Evento en el menú" 
              className={styles.stepImage}
            />
            <p className={styles.note}>
              <strong>Nota:</strong> Si no ves esta opción, verifica que hayas iniciado sesión correctamente.
            </p>
          </div>
        </div>

        {/* Paso 4 - Formulario */}
        <div className={styles.stepCard}>
          <div className={styles.stepNumber}>4</div>
          <div className={styles.stepContent}>
            <h3>Completar el Formulario</h3>
            <p>
              Llena todos los campos requeridos con la información de tu evento:
            </p>
            <div className={styles.formTips}>
              <div className={styles.tipItem}>
                <div className={styles.tipIcon}>📌</div>
                <div>
                  <strong>Título llamativo</strong>
                  <p>Describe tu evento en pocas palabras pero con impacto</p>
                </div>
              </div>
              <div className={styles.tipItem}>
                <div className={styles.tipIcon}>📅</div>
                <div>
                  <strong>Fecha y hora</strong>
                  <p>Selecciona cuidadosamente cuando ocurrirá tu evento</p>
                </div>
              </div>
              <div className={styles.tipItem}>
                <div className={styles.tipIcon}>📍</div>
                <div>
                  <strong>Ubicación</strong>
                  <p>Proporciona una dirección precisa o enlace virtual</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Paso 5 - Publicación */}
        <div className={styles.stepCard}>
          <div className={styles.stepNumber}>5</div>
          <div className={styles.stepContent}>
            <h3>Publicar y Promocionar</h3>
            <p>
              Revisa que toda la información sea correcta antes de hacer clic en "Publicar Evento".
            </p>
            <div className={styles.ctaSection}>
              {localStorage.getItem('token') ? (
                <>
                  <Link to="/create-event" className={styles.primaryButton}>
                    🚀 Crear mi Evento Ahora
                  </Link>
                  <p className={styles.helpText}>
                    ¿Necesitas ayuda? <Link to="/contacto" className={styles.inlineLink}>Contáctanos</Link>
                  </p>
                </>
              ) : (
                <>
                  <Link to="/login" className={styles.primaryButton}>
                    🔑 Iniciar Sesión para Continuar
                  </Link>
                  <p className={styles.helpText}>
                    ¿No tienes cuenta? <Link to="/register" className={styles.inlineLink}>Regístrate aquí</Link>
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublishGuide;