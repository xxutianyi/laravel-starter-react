import { router } from '@inertiajs/react';
import NProgress from 'nprogress';

NProgress.configure({ showSpinner: false });
router.on('start', () => NProgress.start());
router.on('finish', () => NProgress.done());
