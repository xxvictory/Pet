<template>
  <div>
    <van-row type="flex" justify="space-around">
      <van-col span="11" class="box_left">
        <div class="box_desc">
          <p>铲屎官入门</p>
          <van-tag color="#8479EF">全场满99立减10元</van-tag>
        </div>
        <div class="box_img">
          <van-image
            width="70%"
            src="//img10.360buyimg.com/n7/jfs/t19900/174/2540470259/829752/73b7b636/5b7b73e0Nb6fb8366.png"
          />
        </div>
      </van-col>
      <van-col span="11">
        <div class="col_top">
          <van-row type="flex">
            <van-col span="12">
              <div class="box_desc">
              <p>限时折扣</p>
              <van-tag color="#8479EF">整点秒杀</van-tag>
              </div>
            </van-col>
            <van-col span="12">
              <div class="top_right">
                <van-image
                  width="100%"
                src="//img14.360buyimg.com/n7/jfs/t1/46545/24/6390/85158/5d41047bEd0f94864/f30a522833894f9b.jpg"
                />
              </div>
            </van-col>
          </van-row>
        </div>
        <div class="col_bottom">
            <van-row type="flex">
              <van-col span="12">
                <div class="box_desc">
                  <p>整点特惠</p>
                  <van-tag color="#8479EF">10点上线</van-tag>
                </div>
              </van-col>
              <van-col span="12">
                <div class="top_right">
                  <van-image
                    width="100%"

                    src="//img14.360buyimg.com/n7/jfs/t1/71286/19/8449/313780/5d635321E633aa5d8/ca12c804b2ffe74f.jpg"
                  />
                </div>
              </van-col>
            </van-row>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import ImgSer from '../PetService/ImgSer'
export default {
  name: 'LayoutShopp',
  components: {ImgSer}
}
</script>

<style scoped>
  .box_desc{
    margin-left: 0.5rem;
  }
  .box_desc>p{
    font-size: 1rem;
    margin-top: 0.3rem;
    margin-bottom: 0.3rem;
  }
  .box_img{
    text-align: center;
  }
  .box_left{
    border:1px solid #8479EF;
    border-radius: 8px;
  }
.col_top{
  border:1px solid #8479EF;
  border-radius: 8px;
  margin-bottom: 0.5rem;
  margin-right: 0.5rem;
}
  .col_bottom{
    border:1px solid #8479EF;
    border-radius: 8px;
    margin-right: 0.5rem;
  }
</style>
