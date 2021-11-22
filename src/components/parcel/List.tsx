import styled from 'styled-components'
import { logo_list }from "@src/assets/data/LogoList"

interface Props {
  type: String;
}

const ParcelListWrap = styled.div`
  margin-top: -10px;
`
const Block = styled.div`
  display: flex;
  padding: 0 10px 10px;
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
`


const ParcelList = () => {
  let imageName = "naver"

  return (
    <>
      <ParcelListWrap>
        <Block>
          <BlockCarrierImg
            src={require(`@src/assets/img/logo-${logo_list.includes('cj') ? imageName : 'box'}.png`).default}
            alt={imageName}
          />
          <BlockParcelInfo>
            <BlockParcelInfoText type="name">KF-94 새부리 마스크KF-94 새부리 마스크KF-94 새부리 마스크KF-94 새부리 마스크KF-94 새부리 마스크</BlockParcelInfoText>
            <BlockParcelInfoText type="status">배송중</BlockParcelInfoText>
          </BlockParcelInfo>
          <BlockShopImg
            src={require(`@src/assets/img/logo-${logo_list.includes(imageName) ? imageName : 'box'}.png`).default}
            alt={imageName}
          />
        </Block>
        <Block>
          <BlockCarrierImg
            src={require(`@src/assets/img/logo-${logo_list.includes('cj') ? imageName : 'box'}.png`).default}
            alt={imageName}
          />
          <BlockParcelInfo>
            <BlockParcelInfoText type="name">KF-94 새부리 마스크KF-94 새부리 마스크KF-94 새부리 마스크KF-94 새부리 마스크KF-94 새부리 마스크</BlockParcelInfoText>
            <BlockParcelInfoText type="status">배송중</BlockParcelInfoText>
          </BlockParcelInfo>
          <BlockShopImg
            src={require(`@src/assets/img/logo-${logo_list.includes(imageName) ? imageName : 'box'}.png`).default}
            alt={imageName}
          />
        </Block>

      </ParcelListWrap>
    </>
  );
}

export default ParcelList;
 