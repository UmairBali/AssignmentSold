import './Cards.css'
import Button from '@mui/material/Button';
import BedIcon from '@mui/icons-material/Bed';
import BathtubIcon from '@mui/icons-material/Bathtub';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import { useEffect, useState } from "react"; 
import axios from "axios";
import baseURL from '../../Config';

export default function Cards() {
    // for storing mutiple data
const [data, setData] = useState([]);
// for storing sting 
// const [data1, setData1] = useState();
// for storing numbers
// const [data2, setData2] = useState(0);
    useEffect(() => {
        axios
          .get(`${baseURL}/api/Assignment/GetAssignments`)
          .then((response) => {
            setData(response.data);
            // setIsLoading(false);
          })
          .catch((error) => {
            console.error(error);
            // setIsLoading(false);
          });
      }, []);
      console.log("my api response",data )
    return (
        <div>
            <div className="row">
                <div className="col-lg-6 crst fef">
                    {data?.data?.map((item)=>(
                    <div key={item.id} className="row crst2">

                        <div className="col-12 cardo p-1">
                            <div className="paet">
                                <div className='hdb'><Button className='hdbtn ' variant="contained">Hot Deals</Button></div>
                                <div className='idb'><Button className='idbtn' variant="contained">ID:{item.id}</Button></div>
                            </div>
                            <div className="parenttwo">
                                <div className='bedicn'>
                                    <BedIcon /> 1 bed
                                </div>
                                <div className='bathicn'>
                                    <BathtubIcon /> 2 bath
                                </div>
                                <div className='parkicn'>
                                    <LocalParkingIcon /> 1 Parking
                                </div>
                            </div>
                            <div className='firstline'>
                                <div className='hdb'><Button className='condo ' variant="contained">Condo</Button></div>
                                <div className='posted'> Posted: <span className='feb'>5-Feb</span> </div>
                            </div>
                            <p className='wasprice mb-0'>Was$110,789 <span className='sqt'>1100SQft</span></p>
                            <div className='allnowdb'>
                                <p className='nowprice mb-0 '>Now$80,789 <span className='sqt'>1100SQft</span></p>
                                <p className='clode'>Closed: <span>5-feb</span></p>
                            </div>
                            <p className=''>toronto canada</p>
                            <div className='comicon'>
                                <Button className='comparebtn' variant="contained"><CheckBoxOutlineBlankIcon />Compare</Button>
                                <FavoriteBorderIcon className='heart' />
                                <ShareIcon className='shre' />
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="col-lg-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108208.76133046873!2d72.61463062320021!3d32.055078894257015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39217439502694e3%3A0x55e1bad6edcbbc70!2sSargodha%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1692882890556!5m2!1sen!2s" style={{width:"100%" , height:"100%"}}  loading="lazy" ></iframe>
                </div>
            </div>
        </div>
    )
}
