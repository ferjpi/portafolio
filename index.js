app.set('port', process.env.PORT || 2556);

server.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
