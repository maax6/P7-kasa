export default function Owner({host}) {
  const splittedHost = host.name.split(" ");
  const [name, lastname] = splittedHost;
  return (
    <div className="owner">
      <div className="owner__name">
        <p className="owner__firstname">{name.trim()}</p>
        <p className="owner__lastname">{lastname.trim()}</p>
      </div>

      <img src={host.picture} alt="" className="owner__picture" />
    </div>
  );
};
