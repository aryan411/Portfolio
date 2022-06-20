import express from 'express';
const router = express.Router();

import { AuthGuard } from '../Util';

import * as ContactList  from '../Controllers/conatct-list';

router.get('/contact-list',AuthGuard, ContactList.DisplayContactList);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/contact-list/edit/:id', AuthGuard, ContactList.DisplayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/contact-list/edit/:id', AuthGuard, ContactList.ProcessEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/contact-list/delete/:id', AuthGuard, ContactList.PerformDelete);

export default router;
