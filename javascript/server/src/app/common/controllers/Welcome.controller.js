exports.init = (request, response) => {
  response.status(200).json({
    status_error: false,
    status_message: 'Server is runnig...',
    status_info: {
      activity: new Date(),
      status_code: 200,
    },
  });
};
