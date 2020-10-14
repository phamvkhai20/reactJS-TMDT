import React from 'react'
import FGioiThieu from './FGioiThieu'
import FHopTacLienKet from './FHopTacLienKet'
import FHoTroKH from './FHoTroKH'
import FSubscriber from './FSubscribe'
import FTheoDoi from './FTheoDoi'

const Footer = () => {
    return (
        <div className=" mt-5 footer" >
            <FSubscriber />
            <div className="container box-footer mt-3  ">
                <div className="row">
                    <div className="col">
                        <FHoTroKH />
                    </div>
                    <div className="col">
                        <FGioiThieu />
                    </div>
                    <div className="col">
                        <FHopTacLienKet />
                    </div>
                    <div className="col">
                        <FTheoDoi />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
