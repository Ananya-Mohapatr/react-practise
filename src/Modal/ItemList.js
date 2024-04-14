import { CDN_URL } from "../utils/constants"

export const ItemList = ({ items }) => {
    return (
        <div>

            {items.map(i => (
                <div className="border-b-2 border-grey text-left m-2 p-2 flex justify-between" key={i.card.info.id}>
                    <div className="w-9/12">
                        <div className="py-2"><span>{i.card.info.name}</span>
                            <span> - ₹{(i.card.info.price || i.card.info.defaultPrice) / 100}</span>
                        </div>
                        <p className="text-xs">{i.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                        <button className="p-1 bg-black text-white shadow-lg mx-4">Add+</button>
                        </div>

                        <img src={CDN_URL + i.card.info.imageId}></img>
                    </div></div>

            )

            )}
        </div>
    )
}