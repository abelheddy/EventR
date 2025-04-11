import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './css/MainPage.module.css';
import concertImg from '../../assets/images/concert.jpg';
import foodFestivalImg from '../../assets/images/food-festival.jpg';
import heroBg from '../../assets/images/hero-bg.jpg';

const MainPage = () => {
    const [events, setEvents] = useState([]);
    const [featuredEvents, setFeaturedEvents] = useState([]);
    const [categories, setCategories] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    useEffect(() => {
        const mockEvents = [
            {
                id: 1,
                title: "Concierto de Rock Internacional",
                date: "2023-12-15",
                location: "Estadio Nacional",
                category: "música",
                price: 50,
                image: concertImg,
                featured: true
            },
            {
                id: 2,
                title: "Festival de Gastronomía",
                date: "2023-11-20",
                location: "Parque Central",
                category: "gastronomía",
                price: 30,
                image: foodFestivalImg,
                featured: true
            },
        ];

        const mockCategories = [
            { id: 'all', name: 'Todos' },
            { id: 'music', name: 'Música' },
            { id: 'sports', name: 'Deportes' },
            { id: 'gastronomy', name: 'Gastronomía' },
        ];

        setEvents(mockEvents);
        setFeaturedEvents(mockEvents.filter(event => event.featured));
        setCategories(mockCategories);
    }, []);

    const filteredEvents = events.filter(event => {
        const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            event.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className={styles.mainPage}>
            {/* Hero Section */}
            <section
                className={styles.hero}
                style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${heroBg})` }}
            >
                <div className={styles.heroContent}>
                    <h1>Encuentra los mejores eventos cerca de ti</h1>
                    <p>Compra entradas de forma segura o publica tu propio evento</p>
                    <div className={styles.searchBar}>
                        <input
                            type="text"
                            placeholder="Buscar eventos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <button className={styles.searchButton}>Buscar</button>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className={styles.categoriesSection}>
                <h2>Categorías</h2>
                <div className={styles.categories}>
                    {categories.map(category => (
                        <button
                            key={category.id}
                            className={`${styles.categoryBtn} ${selectedCategory === category.id ? styles.active : ''}`}
                            onClick={() => setSelectedCategory(category.id)}
                        >
                            {category.name}
                        </button>
                    ))}
                </div>
            </section>

            {/* Featured Events */}
            <section className={styles.featuredEvents}>
                <h2>Eventos Destacados</h2>
                <div className={styles.eventsGrid}>
                    {featuredEvents.map(event => (
                        <div key={event.id} className={styles.eventCard}>
                            <img src={event.image} alt={event.title} />
                            <div className={styles.eventInfo}>
                                <h3>{event.title}</h3>
                                <p className={styles.eventDate}>{new Date(event.date).toLocaleDateString()}</p>
                                <p className={styles.eventLocation}>{event.location}</p>
                                <div className={styles.eventPrice}>${event.price}</div>
                                <Link to={`/event/${event.id}`} className={styles.viewDetails}>Ver detalles</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* All Events */}
            <section className={styles.allEvents}>
                <div className={styles.sectionHeader}>
                    <h2>Próximos Eventos</h2>
                    <Link to="/events" className={styles.viewAll}>Ver todos</Link>
                </div>
                <div className={styles.eventsList}>
                    {filteredEvents.slice(0, 4).map(event => (
                        <div key={event.id} className={styles.eventItem}>
                            <img src={event.image} alt={event.title} className={styles.eventThumbnail} />
                            <div className={styles.eventDetails}>
                                <h3>{event.title}</h3>
                                <p className={styles.eventMeta}>
                                    <span>{new Date(event.date).toLocaleDateString()}</span> •
                                    <span> {event.location}</span>
                                </p>
                                <div className={styles.eventActions}>
                                    <span className={styles.eventPrice}>${event.price}</span>
                                    <Link to={`/event/${event.id}`} className={styles.buyBtn}>Comprar</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className={styles.ctaContent}>
                    <h2>¿Tienes un evento para promocionar?</h2>
                    <p>Llega a miles de personas interesadas en asistir a eventos como el tuyo</p>
                    <Link to="/create-event" className={styles.ctaButton}>Publicar Evento</Link>
                </div>
            </section>
        </div>
    );
};

export default MainPage;