
export default function GridData(props) {
	return (
		<>
                  <div>
                        <img aria-label='pokemon image' src={props.data.sprites.other['official-artwork'].front_default} alt='pokemon image'/>
                  </div>
                  <div aria-label='pokemon height' title={props.data.height}>{props.data.height}</div>
                  <div aria-label='pokemon weight' title={props.data.weight}>{props.data.weight}</div>
                  <div>
                        {
                              Object.keys(props.data.moves).map((key, i) => {
                              return (
                                    <span aria-label='pokemon move' key={i}>{props.data.moves[i].move.name}</span>
                              )
                              })
                        }
                  </div>
		</>
	)
}
