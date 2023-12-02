 function executeMsgScript(command) {
    const commands = command.split(':');
    const action = commands[0].trim();
    const message = commands[1].trim();

    switch (action) {
      case 'print':
        console.log(message);
        break;
      case 'console.print':
        console.log('Console Print:', message);
        break;
      case 'innerhtml':
        document.body.innerHTML += message;
        break;
      case 'alert':
        alert(message);
        break;
      default:
        console.error('Unknown action:', action);
    }
  }
