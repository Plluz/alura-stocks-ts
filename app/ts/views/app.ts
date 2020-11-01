const controller = new TransactionController();

$('.form').submit(controller.add.bind(controller));