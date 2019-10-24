class App extends React.Component {
  render() {
    let items = [
      { text: 'Finish Lab 28', complete: false },
      { text: 'Practice Lab 28', complete: true },
    ];

    return (
      <section class="todo">
        <Header count={items.length} />
        <div>
          <Form />
        </div>
        <List items={items} />
      </section>
    );
  }
}







