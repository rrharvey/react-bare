interface Name {
    firstName: string,
    lastName?: string
}

const me = {
    firstName: 'Ryan',
    lastName: 'Harvey'
};

const formatName = (name: Name) => `${name.firstName} ${name.lastName}`;

function Name(props: { who: Name }) {
    return React.createElement('div', { className: 'greeting' },
        'Hello ',
        formatName(me)
    );
}

ReactDOM.render(
    Name({ who: me }),
    document.getElementById('app-root')
);
