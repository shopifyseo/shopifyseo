import Alpine from 'alpinejs';
import gdpr from './components/gdpr';

window.Alpine = Alpine;
Alpine.data('gdpr', gdpr);
Alpine.start();
