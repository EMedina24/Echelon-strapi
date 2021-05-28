import React, { useEffect,useState } from 'react';
import { graphql } from "gatsby";
import ArticlesComponent from "../../components/articles";
import Layout from "../../components/layout";

export const query = graphql`
  query  {
    allStrapiPdPs {
      edges {
        node {
          Header

          PDPHeaderIMG {
            localFile {
              publicURL
            }
          }
          PDPSlider {
            localFile {
              publicURL
            }
          }
          Price
          CTA
          CTALINK
          description
        }
      }
    }

  }
`;

const PDPs = ({ data }) => {
  
const PDPData= data.allStrapiPdPs.edges[0].node;



  const img = data.allStrapiPdPs.edges[0].node.PDPSlider;
  const [imgSrc,setImgSrc] = useState(img[0].localFile.publicURL);
  const [Active, setActive] = useState(false);

  const renderImages =()=>{

    let renderedImages 
  
     renderedImages = img.map(item=> {
     let imgComponent
     let isActive = item.localFile.publicURL === imgSrc ? "active": ""
     
     imgComponent = ( <div  className={`thumbnail ${isActive}`}>
                  <img
                     src={item.localFile.publicURL}
                     loading="lazy" 
                     alt="Echelon Smart Connect Bike EX3 - Echelon Fit US"
                     className={"thumbnail-image"}
                     onClick={ () =>
                    setImgSrc(item.localFile.publicURL)}
                  />
                </div>)
  
          return imgComponent
  })
  
  return renderedImages
  
  }




 

  return (
    <Layout >
     
     <div class="product-description" id="product">
      
      <div class="container">
     
        <div class="row product-wrapper">
         
          <div class="image-gallery-container">
           
            <div class="highlight-image mb-20 max-w-md md:mb-4  sm:mb-4">
            
              <div id="-spin-studio-active-wrapper">
                <img
                  id="highlight-image"
                  loading="lazy" 
                  src={imgSrc}
                  alt="Echelon Smart Connect Bike EX3 - Echelon Fit US"
                  class="max-w-md "
                />
              </div>
            </div>{" "}
            <div class="row thumbnail-row">


              {renderImages()}
              
              
            </div>
          </div>{" "}
          <div class="information-container">
            <h2 class="product-title">{PDPData.Header}</h2>{" "}
            <div class="trustspot-inline-product" data-product-sku="4068044406866">
              <div class="trustspot-inline-rating">
                <div class="ts-reviews-rating"></div>
              </div>
            </div>
            <p class="credera-snippet copy-text ">
           {PDPData.description}
            </p>
            <div class="row">
              
              <a
                href="/contact"
                title="Contact Echelon"
                aria-label="Contact Echelon"
                class="credera-snippet primary-button primary-button-with-icon sub-buy-button "
              >
                {" "}
                <span class="button-content">
                  {" "}
                  <span>Contact Echelon</span>{" "}
                  <svg
                    fill="none"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {" "}
                    <path
                      d="m10 20c-1.9778 0-3.9112-0.5865-5.5557-1.6853s-2.9262-2.6606-3.6831-4.4879c-0.75688-1.8272-0.9549-3.8379-0.56905-5.7777s1.3383-3.7216 2.7368-5.1202c1.3985-1.3985 3.1803-2.3509 5.1201-2.7368s3.9504-0.18782 5.7777 0.56905c1.8273 0.75688 3.3891 2.0386 4.4879 3.6831 1.0988 1.6445 1.6853 3.5779 1.6853 5.5557 0 2.6522-1.0536 5.1957-2.929 7.0711-1.8753 1.8753-4.4188 2.9289-7.071 2.9289zm0-18.333c-1.6482 0-3.2593 0.48874-4.6297 1.4044s-2.4385 2.2172-3.0692 3.7399-0.79579 3.1982-0.47424 4.8147c0.32154 1.6165 1.1152 3.1014 2.2807 4.2669 1.1654 1.1654 2.6502 1.9591 4.2668 2.2806 1.6165 0.3216 3.2921 0.1565 4.8148-0.4742s2.8242-1.6989 3.7399-3.0693 1.4044-2.9815 1.4044-4.6297c0-2.2101-0.878-4.3298-2.4408-5.8926s-3.6824-2.4408-5.8925-2.4408zm4.9833 8.4008v0.0225c-0.0053 0.0736-0.0193 0.1463-0.0416 0.2167-0.0167 0.0291-0.0334 0.0533-0.05 0.0833-0.0287 0.0582-0.0652 0.1124-0.1084 0.1608-0.0281 0.0261-0.0588 0.0493-0.0916 0.0692l-2.1334 3.16c-0.1422 0.1886-0.3463 0.321-0.5764 0.3741-0.2301 0.053-0.4715 0.0232-0.6819-0.0841-0.1017-0.0394-0.1933-0.1011-0.2679-0.1807-0.0746-0.0795-0.1304-0.1749-0.1632-0.2789s-0.0418-0.2141-0.0263-0.3221c0.0155-0.1079 0.055-0.211 0.1157-0.3016l1.45-2.1525h-6.575c-0.22102 0-0.43302-0.0878-0.5893-0.2441s-0.24404-0.3683-0.24404-0.5893c0-0.22098 0.08776-0.43296 0.24404-0.58924s0.36828-0.24406 0.5893-0.24406h6.575l-1.45-2.1517c-0.0605-0.09066-0.0999-0.19376-0.1153-0.30169s-0.0065-0.21794 0.0263-0.32191 0.0886-0.19926 0.1631-0.27883 0.166-0.1414 0.2676-0.18092c0.2105-0.10685 0.4518-0.13634 0.6818-0.08333 0.23 0.053 0.434 0.18516 0.5765 0.37335l2.1167 3.135c0.0136 0.01067 0.025 0.02399 0.0333 0.03916 0.0719 0.06084 0.1337 0.13255 0.1834 0.21251 0.0546 0.09525 0.0859 0.20201 0.0916 0.31166v0.01332c0.0032 0.00376 0.0056 0.00816 7e-3 0.0129 0.0015 0.00473 0.0019 0.00971 0.0014 0.01462 0 0.01333 0.0083 0.02499 0.0083 0.03832 0 0.01331-0.0083 0.02581-0.0083 0.03831 0.0011 0.0105-0.0019 0.0209-0.0084 0.0292z"
                      clip-rule="evenodd"
                      fill="#fff"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>









    </Layout>
  );
};

export default PDPs;
