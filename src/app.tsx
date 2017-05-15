interface Name {
    firstName: string,
    lastName?: string
}

const me = {
    firstName: 'Ryan',
    lastName: 'Harvey'
};

const formatName = (name: Name) => `${name.firstName} ${name.lastName}`;

const Name = (props: { who: Name }) => (
    <div className="greeting">
        Hello <span className="name">{formatName(props.who)}</span>
    </div>
);

ReactDOM.render(
    <Name who={me} />,
    document.getElementById('app-root')
);
