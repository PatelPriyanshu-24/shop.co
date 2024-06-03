
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';


function Footer() {
    return (
       <>
         <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h1 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                SHOP.CO
              </h1>
              <p>
              We have clothes that suits your style and which you’re proud to wear. From women to men.
              </p>
              <span><InstagramIcon/> <FacebookIcon/><TwitterIcon/><GitHubIcon/></span>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Help</h6>
              <p>
                <a href='#!' className='text-reset'>
                Customer Support
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Delivery Details
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Terms & Conditions
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                Privacy Policy
                </a>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>FAQ</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Acccount
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Manage Delevier
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Payments
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
               info@shop.co
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        
          SHOP.CO
        
      </div>
    </MDBFooter>
       </>
    )
}
export default Footer
