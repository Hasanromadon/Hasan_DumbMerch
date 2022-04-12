const express = require('express');

const router = express.Router();
const {
  addTransaction,
  getTransactions,
  updateTransaction,
  getTransaction,
  deleteTransaction,
  transactionReportCurrentMonth,
  transactionReportAll,
  transactionReportByMonth,
} = require('../controllers/transactionController');
const { auth } = require('../middlewares/auth');

router.use(auth());
router.route('/').get(getTransactions).post(addTransaction);
router.get(
  '/report/current-month',
  auth('admin'),
  transactionReportCurrentMonth
);
router.get('/report/all', auth('admin'), transactionReportAll);
router.get('/report/months', auth('admin'), transactionReportByMonth);
router.route('/:id').get(getTransaction);
router.patch('/:id', auth('admin'), updateTransaction);
router.delete('/:id', auth('admin'), deleteTransaction);

module.exports = router;
