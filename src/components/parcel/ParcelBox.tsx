import styled from 'styled-components'
import { logo_list } from "@src/assets/data/LogoList";
import default_box from "@src/assets/img/logo-box.png";

interface Props {
  type: String;
}

interface ParcelInfo {
  carrier?: {
    name?: string;
    tracking_no?: string;
    number?: any;
  },
  shop?: {
    name?: string;
    partner?: boolean;
  };
  product?: {
    name?: string;
    price?: string;
    currency?: string;
  };
  delivery?: {
    status: string;
    logs?: any;
  };
}

const ParcelListWrap = styled.div`
`
const Block = styled.div`
  display: flex;
  padding: 0 10px 10px;
  min-height: 60px;
  box-sizing: border-box;
  &:hover {
    cursor: pointer;
    opacity: .7;
  }
`

const BlockCarrierImg = styled.img`
  width: 50px;
  min-width: 50px;
  height: auto;
  border-radius: 50%;
  border: 1px solid #ddd;
  text-align: center;
  box-sizing: border-box;
  padding: 10px;
`

const BlockParcelInfo = styled.div`
  flex: auto;
  padding: 0 10px;
  width: calc(100% - 140px);
`

const BlockParcelInfoText = styled.p<Props>`
  text-align: left;
  flex: auto;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  margin: 0;
  font-size: 14px;
  line-height: 20px;
  font-weight: ${(props) => props.type === 'status' ? 'bold' : 'normal'}; 
  padding-top: ${(props) => props.type === 'status' ? '3px' : '0'}; 
`

const BlockShopImg = styled.img`
  width: 50px;
  min-width: 50px;
  height: auto;
  border-radius: 10px;
  text-align: center;
  box-sizing: border-box;
  object-fit: cover;
`

const ParcelBox = ({carrier, shop, product, delivery}: ParcelInfo) => {
  return (
    <>
      <ParcelListWrap>
        <Block>
          <BlockCarrierImg
            src={logo_list.find((e) => e.name === carrier?.name?.toLocaleLowerCase())?.url || default_box }
            alt={carrier?.name}
          />
          <BlockParcelInfo>
            <BlockParcelInfoText type="name">{product?.name || '택배'}</BlockParcelInfoText>
            <BlockParcelInfoText type="status">{delivery?.status}</BlockParcelInfoText>
          </BlockParcelInfo>
          {shop?.name && (
            <BlockShopImg
              src={logo_list.find((e) => e.name === shop?.name?.toLocaleLowerCase())?.url || default_box }
              alt={shop.name}
            />
          )}
        </Block>
      </ParcelListWrap>
    </>
  );
}

export default ParcelBox;
 