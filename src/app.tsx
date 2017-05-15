interface Name {
    firstName: string,
    lastName?: string
}

const me = {
    firstName: 'Ryan',
    lastName: 'Harvey'
};

// const formatName = (name: Name) => `${name.firstName} ${name.lastName}`;
function formatName(name: Name) {
    return name.firstName + ' ' + name.lastName;
}

ReactDOM.render(
    React.createElement('div', {className: 'greeting'},
        'Hello ',
        formatName(me)
    ),
    document.getElementById('app-root')
);
