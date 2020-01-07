import '../less/top-search.less';
import '../less/reset.less';
import '../public/header.js';
import '../public/header.less';
import '../public/link-url.js';
import '../public/footer.less';
import '../public/footer.js';
const _url = "http://127.0.0.1:8081/static/images/"
let _topArr = [{
    user_img: `${_url}IMG_0642@2x.png`,
    name: "鲨鲨食物日记",
    info: "匠欣 · 专业西餐厅，做精致的猪猪女孩",
    photo: `${_url}221.png`,
    address: "成都市武侯区",
}, {
    user_img: `${_url}IMG_0642@2x.png`,
    name: "终身幸福",
    info: "不是所以餐厅都能叫做”私房菜“",
    photo: `${_url}221.png`,
    address: "广汉市苏州路15号",
}, {
    user_img: `${_url}IMG_0642@2x.png`,
    name: "西大学长",
    info: "这里是西南交大",
    photo: `${_url}221.png`,
    address: "四川省成都市金牛区二环路北一段111号",
}, {
    user_img: `${_url}IMG_0642@2x.png`,
    name: "西大学长",
    info: "这里是西南交大",
    photo: `${_url}221.png`,
    address: "四川省成都市金牛区二环路北一段111号",
}, {
    user_img: `${_url}IMG_0642@2x.png`,
    name: "西大学长",
    info: "这里是西南交大",
    photo: `${_url}221.png`,
    address: "四川省成都市金牛区二环路北一段111号",
}, {
    user_img: `${_url}IMG_0642@2x.png`,
    name: "西大学长",
    info: "这里是西南交大",
    photo: `${_url}221.png`,
    address: "四川省成都市金牛区二环路北一段111号",
}, {
    user_img: `${_url}IMG_0642@2x.png`,
    name: "西大学长",
    info: "这里是西南交大",
    photo: `${_url}221.png`,
    address: "四川省成都市金牛区二环路北一段111号",
}, {
    user_img: `${_url}IMG_0642@2x.png`,
    name: "西大学长",
    info: "这里是西南交大",
    photo: `${_url}221.png`,
    address: "四川省成都市金牛区二环路北一段111号",
}, ]
let konstr = ""
let addArray = []
    // 将所有坐标添加到数组addArray中
_topArr.forEach(index => {
        addArray.push(index.address)

    })
    // 动态加载多个li标签
_topArr.forEach(el => {



    konstr += ` <li><img src="../images/动态背景.png" alt=""    class="theba">
                                    <div class="infoab flex-c">
                                        <img src=${el.user_img} alt="">
                                        <div class="artic">
                                            <p>${el.name}</p>
                                            <p>${el.info}</p>
                                            <p><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAgAElEQVR4Xu19CZQU1dn281YPzHT1gAoqXQ0aF9yN5s9m3JdEJioad4nbp5/5YxS6elxwTzKucQtMV4PGRGM+l7jvxIW4JPolapIv3++C+xaFrgYFFaarB5iu9z81DGZAYOreWrq6u+oczuGcfp/3vks9U3Vv3fu+hPiKIxBHYK0RoDg2cQTiCKw9AjFB4rsjjsA6IhATJL494gjEBInvgTgCchGInyBycYtRTRKBmCBNkujYTbkIxASRi1uMapIIxARpkkTHbspFICaIXNxiVJNEICZIkyQ6dlMuAjFB5OIWo5okAjFBapBovgHDyn0bjR5WTYyyQaNtotEKMJqB0Y45BCy0gYUK80IFvHB5oroo1fLxQjoVy2tgblMPGRMkwPRbMzOb2MuxraJgG8Dehoi2Yca2ADaRHPYjIrzBzG8Cypu2jTeVYXhDnVz8SFJfDBsiAjFBfLxFLGPsOBu8pwI+AMCBGHgi+DjE2lQtBPCoDXpMAT2n6vPmhjBmUwwRE8RjmnsLWkfVxp5E2AvAnh7V+QV/jhnPJhQ815Y1n/BLaTPqiQkikfUeY+zOCaoeykyHAdhZQkWYkJeI+IEqJx5s1+e9FObAjTBWTBCXWVx8Q2bDxFI+TCEcytz/+lR3FxEetRkPVlvpgZGnFj+pOwdqYHBMkCGC/vm0caOGJ6qnMfHpAGVqkKMAhuQiMV23rJq4fr0z5y4KYICGURkTZC2p/GjauOToRPU0EJ0O8JYNk/FVHKF3wXzdwmri+k3OnFtpTB+9eRUTZA3xK3enT1cUOo2BHb2Ftz7QBLxq23x9qrN0XX1YHJ6VMUEGxbrX0CYw4ULm/hWppruI8CwxLm/TzdlN5/xaHI4JAsCZZwxrqV4I4Mz4xuiPwLTlfYnL4/lJ/66G5r6sfGYSEV/YLK9TbrPtvHYx0+VqrninW0wjyjUtQZYY6Y1aSLmKmU9uxMT65RMR3dzH9rkj9NLHfumsJz1NSZDKDG0vu8oFItqpnpJVK1uZ+WUlQdnkFPPZWtlQq3GbjiC9hnaqDfyqVgF3xmVgERG9TcyLGNTDbPcQ0OP83/mdwO0MtBMp7f3/JxrFzFsRMKqWdivAT9p084Za2hD22E1FEMvQ8gD0UINM9CLb9uMK0dts2+8k7WFvk+THOZ42blRFWb4VKcp4EI9nKAeAeZdQ/QEMVTdzIY9Zs+GahiCVgjabGfsHHWkGPiXwbLaVP9IwzA56K7qzpZ6XYwIp9v4MmkDABkH7SIQ/JrPmhKDHiYL+piCIZWjPANgnwID3AphFzLOWJxKzRk6Z52w/D/1aPGPs6GHV6kQmmgjA+dcWoBF/UnVz3wD1R0J1wxMkSHIw8BiIZ1GVZqmd5oeRyOiAEVa3tikneCKYJhLgnE8J4mp4kjQ0QQIjB9OLIORVvXhHEHed3zotI/NDMHKgQOYrDU2ShiVIQOR4H4y8mjOdyX7dXVZey4HgTLA399n4hiVJQxLEMrQHABzq603AmF4dbl854rT5C3zVG7KyJdeP2TixTDkPhDN8HvpBVTedA2QNdTUcQSqGdikDF/mWJeLn2cZlqVzpUd90RkBROZ8+kBRcBKZd/TKHgMuSuvlTv/RFQU9DEaRspE8jkG9btono0vcWbnDZDl1zlkUhWX7bMKdrh+FbjP70Imb27aZm8OkpvXS937bWSl/DEKTHSJ+kgG72JZCE99jmbKM9NdYWmxVPEyqAsYUf8bPBJ7frpd/5oavWOhqCIEsKY45JsOLLrlMGnqwSZUdmi2/UOjlhjr+4kNk2wVwg4Ht+jFsle9KI7Py7/NBVSx11T5DPjI23HI7E0wA29RpIIvz6vYWjso36SjVUfFa8ci0qMOPHQ8m6+P3DZajut76+4F0XspEVqXuCWIZ2G4DjvEaYmS9O5UpdXvU0Ar6cT3cR0c998OV2VTeP90FPzVTUNUHKee0nRPA8IYzJ8eX7zy+SMOO0VM6s6e5pL+yqW4IsnZHeocr0NBgbewkAGGepOXOaJx0NCrby2pkg/NKTe4QFCeL9WqeU5njSUyNw3RLEMrT7ABzuJW4K6JA2vfiIFx2Nju01Mgfb4Ic9+nm/qptHeNRRE3hdEsQyMjrAnrZ7MPNBzbKM6/XO6l8GJvqDNz2UU/Wi4U1H+Oi6I4izHNnC/GdA/tWKwCcnG2SdPqxbpmKkT2Jv35kW9BHtXW/L53VHECuv3QqC9MqI83U8mS3+LKwbq5HGqRQyl3j66s64Tc2ZJ9RTTOqKIJWCdjwzbpUNMAG3J+t82VHWd79wFUO7jT0sqxPhhGTWdJbm6+KqG4I4u1Bblit/ZvR3aBK+CHiToXwvbi4jHLpVAE6TIIL9JMPpmiV+EfBG3zB773rZFV03BPFccIFwpJo1nZWv+PIYAaugHQHGvR7U1E3hh7ogSP/E3OaXQBgulRSma9VccaoUNgatMQJWPnMNiM+WCg9jWZ9CO9fDhL0uCFLOa5cRwamdK3M99/6iUd9r1v1VMgFzg3H2bW0+atGTsm3nmHF5Kmf6d27HjdESMpEnyKIrN1ivTW1zWod9RcI/KIwD2nLm4zLYGLPuCPTmte/bhMck4/SvXqt351Hnffq5JD4UWOQJUs6nJxPRDJloMHBLSjf/QwYbY9xFoGxo/0XAie6kV5Vi5impXGmmDDYsTOQJYhnp5wH6jmhACFhmK7Rrakrxn6LYWN59BMozMl9XbH6eITM/5BdUveTbkV/3VruXjDRBLENz9lrJrTxFfGK+tJDZtsq8PROnwaQBSBNR2kkdM5cAlEBsElMpQfRaa4QPcHmasANHqLp5v/tbNlzJaBNE8qs5AyWC8q2offPonTluvG3bTj1dZyfAtwVT/TcQ3aYoymNtk+e+I4gNVNz5NsKw/05AP8GFroh/XY8sQfimDUdUysOcG0F4OzsDV6R0U3bVSyi/boTL+cyPFOLD2acKhwQ8ZjPdn8oVb3QzfhgyZUO7nIALJMZakEwtH0+nfLJEAhs4JLIEsYz0kQDdIxoBAhYTql9vi8BRz3J35hBFsXUGfVfUDzfyBH7KthUj1Vn0uh3dzXDrlOk1Nt6SkfgnAyPFlfFRql7y8uFRfEiXiMgSpGxovybg/7r0499iKyofdgrjfARYM8bsAltxKhj+0Ee161J1BxQ7r06Z/2JI461xGCuvdQ9UbhQyg4HfpHTTj3PwQuO6EY4kQfgZtFRe0ZzXK9FvH1XbTny9vXPuy26cD0LGKmSyYK7NuQciXc0WC0H45UZnT/e4nRSl6qwaJtzID5L5V/Kr5njaF32CuMDFI0mQspE+iECzJLyvaZEAK582QJSVsNs/CHNBzZXCbRI0yHrZIhoMnpjSSx4PZfkXxpWaIkkQy9CmAxB+TSLg+KRu3u5/mIbWaBnagwB+MLRkKBIPqbrpb21il2ZXDO04BmS2s3eruul3vWCXVq9dLKoE+TuAb4p45/T9U/sSW8m2NxMZa3XZipGZxeCDvOjwG0ugPyT1otNEJ9TLaRNntVTfluin+A9VN78VqrEuBoscQSrT05txgt53YfvqIjV5vfJ6iEvCT9eQWh1Okn3Noipvnjyj9IFrB0MQjBxBZGvs1uL1yjLGfAdQng8hTx6GsHdV9fkveFAgDJV9zYpiTd/IEaRiZG5m8EkiWWHw52pfyxZhvl71zNwonai2PCN7wlHEPy+yzgm+aqJv3/bJHzvbV0K5+rvxtlSdJ8EIkQEJ9LukXjxZBBO0bBQJ8g6DtxRznB9R9dIhYhhv0n7U5fJmgRA69LpUlpF5GmChJp8EejepF8cLeRawcKQIIj//4HNUvXRNwLH6Qr2nTZRhGfnlcULdFGgZmasBFj7FGbV5SKQIYnVrR0ARP+tsk71Te3b+K2Hde5aRfgqg/fwYj4HZxPxHm+hl2FXnYBigJHZWmHdiov0J8KkfOT+t6qVAtrysKQ7lQuZQYnZa4YldNo5UO6NTOyBaBClo54HxC5GIEvE7yWxpKxGMF9lKXjuBCbd40QGgzEB+edW+af0z5r+3Ll2fTR+zxbCEcgqhv/lmysu4xDgxmTOlyyaJjP3p9M3Wb00s/VQE0y9LOF/NmlcK4wICRIoglULmt8wsNElj8IyUXgrt67VlZJ4HWPgA17/zR/ckuHpJa27+qyI5XZofs2OVEj8D+CgR3Kqy9IKqF0M7oGQVtP8F42si9hLRzcls8T9FMEHKRooglqH9N4DdRRwm4MdJ3fyNCEZWtpLPHMvEHr7U0z2qXjxadnwHZxmZu72QhJiOS+aKv/dig1tspaDdyIxT3MoPyP1F1c09BDGBiUeKIGVDW0DARiLe2qx8rz037ykRjKyszBL0yrH87EFiGekrATpXxo8wl1Jliowz8HFKN4XPAMnEwg0mMgT57BebbjA8tXyRG6MHy4S56mEZ6XkAZURtBNG1atbfulzyTxIuqnpprLAPEoAl09P7JBL0jCh0WXnYqPXP/1B8/iI6kAv5yBDEMtLfBkj0PENV1c0WF356FpFNNjO/nMqVdvZswGoKvBRLqFZ53xFnlP7kt02r6+PrNt2g0if+Rw/gXVS99Leg7XOjPzIE6TW0CTbwhBujV8oQ8FZSN6VqxIqM48ha+fRVIDpHFAfmqWqudK0wzgVAulgC89VqriT1iubCrFVELEP7EMAmIjgF6GjTzdkimKBkI0OQcj7zAyJ2toy7vpwjp0m95Evb4qEGtQztLwB2G0pu8O8MLGa7unV754L5Iji3sgPFEuaQ+DHXv6q6KbQY4tam1eUqRvpJ0SPHzHRoKld8SHZMP3GRIYiVz0wC8R1CzhE/rGZLoZzBsIz02wAJbYMg4Imkbn5fyCdB4YqhPc5AhxiM31H1cL4dWYX0Q2AS2wbE9EM1V/Sl771YXL4sHRmC9OTTJytEvxV06A5VN48VxEiJVwztc9GCBMS4IJkzhT58ihpXyWvnM+EKEZxT2CKpm+uJYGRlLUNzlpSFzubbzP/ZnivdLDumn7jIEKTcnT6dFBIqQ0nAjUndFC/sIBhBvnmztsqSpRVBGJjwrVTW/IcoTkTeymd2A7Hz+id0JUe0JunkD3qFQBLCFUP7DQM/EoGyzZNTnaXrRDBByUaGIFIthwl5NRt8BROrW9sUCv4lmoTkolGt1DVnmShORN4pt2MjIV5IzsZX1E7TmUAHelkFrRvcv03G/RWh1tyRIUglr13IhMvcRxEIq0BcuTv9LVJIaNmRCK8ns+b2Iv7IyC6YuVF7e7VFuOga2/ztVGfJOdoc6CVTUI4YFyVz5uWBGuZSeWQIUja0CwgQC0oAH+DWFLdyQfsmMYRupsgTJITXPyeWViFzDVis0Q4DF6Z0U2he5fJ+FxaLDEFktiUQcGtSN6VK74tEypqZ2QRVFn4difQrVoI2VScXPxKJg4xsxdBuYUCws210eqpHhiDl7swppLBQrVkCZid1U3CJUzzN3LXD8MqoRUtFkZGepIcwP3LiVTG0J1jwTAvb9KNUZ/Em0XgHIR8ZgliFzDFgFlr7DmobxxpfswxtEQEbCCUhwK/oK+2w8umzQSR0mpKBT1O6OUrIF0nhcj79EhHtJAQnmqRmi3cJYQISjgxBeo30QbZ4NcX5qm6Kl9yXCGaloL3GjO1EoGE84WT+Qoc1P+qfgxiaUyxijEjcFPDEtohUWYwMQWQ3A6q6GYoPlqE5u1L3EUm0I5sA79Cql14TxbmRL+e1bxBB5jvLn1TdFCqo4MaeNclYhsai2LA2U7qxK5Sby40hvddltrH7+A03soNlbLuaDmqv0+BxLCN9FkDCmw79PAeyemwqBe0GZkhUReezVb30S9FYi8r3dG88RlESwuWGlBbatu304pui4wUhHxmC8A0brFdZ2vaZqJOJlsTOracHX829p3vjnRQlsaKogsBFhDnJrLmjAMSVqIenB2y7unN754LAK+AvvW7cTtW+gUIUrrxaIZRs7V2fTo1G99vIEGTgfdVy4iMQSzDokJRefEQEIytrGZrzV21rcbz3o7arj2nlMy+AeBdxW/CWGtIRgbKROZjAos19KqpuqhJ+BQKJGkGcCh+bi3hKoEuSevHnIhhZWctIzwBoshTex7YEZSN9E4EkCxvwTFUvTZHyQRBUMTIXM/hngrD3Vd3cQhATmHjUCCJz5uKxlG4eGFiEBim2CmOOAStCS9GD7fJjPlLOp7uISP4PAtmT1Oz8UJZQy4b2KIn3ZQztrIqbeyZSBCkb2m9IcOcngI/VEA/5ey3743z9V9i+Wqbsj03KOeJfpQffBiGX/TG0BRAswsHAjakQdmi7IYcjEy2CFNKnE4tteXecSCSwfetk83W3TnuR87NwXNWmW0Z2rnu1ZnF3ZpuEwifWW+G4pTO17apVCC9vM/HkVDYaW90jRxDZsw22jRPaO02ZrkZSXPGz9CiA5xh4HDbNTyh2/5Jo1VbSUHgMAc5pxD2ljPwSKNzSoz3d2vGKAvEqjky7q7niX/3x2buWSD1BeNq4ZKWl6qxkiV2M6WrOPFMMJC8dF68eOnZWXpsGgnBLtWRfQqUz5wofThvaIjmJSBHEccHKa2+AIFqp5M+qbgp/5ZYL2QqUVdDuB+MwLzpCwxIeULPm4aGNt2KLiVNWaG+hMRlvqjlzWyFMwMKRI0g5n/4tEQnV5yVgSZuibE5T5i0MOF5fqOcbNtQqS4c/B+FeJmFZuHIcejfZumxPOvUTM6yRlxjpjVpA77JgAx1mvjmVK0kuXwfjXeQI0mNoxykSXVIJfHJSL/0umDCtWatVyOwOZqeecHQvoj3UbFH4zLoXh3oN7VQb+JWoDhs4vr1GXYrXZmvkCCJ9xhoIvYuSE9TKDO0Etj23QxC9l1zJk4ITk1PCaXcw2KBKQZvNjP1dGTlISEF1fJu+4F1RXJDykSNI/01naK8wILh/iZcT8TbJ7HyZDrmeYuz5452n0dcM9uOjpIxZ1owxu8BWhJuGEvBqUje/KjNmkJhIEkTyg6HzWSen6kUjyICtTbdsZ9cgbK1Fx9+Vfsi2XovaB8IvZnBBJMirTquQPgpMd4vqYeDJlG4KP9pFx1mbvKzdfo3fr4f4aDVbusdXnS6VsTG+tcLl10AQ3ktlMx3XHlLfEpfurAiniHBYssyg3hnaHNETfI59NpSvtevzhLel++VbTUlSQ3I48evJZ45VJBoMMVDqxdJtRuuLFvuVB7/0RJIg/fOQQuYSZv6pqKME/DSpm0L1tUTHGEp+4D3cKZYmVHJzKL3r+P0OKHZenTJftH2EhyG/DLUK2r1gHCGqNKqvV5F9gjiGLe0et1NVET9sw8D/qiNadwujrOZQN0K5O3OIoti6aHXzofSu/N2pbm/bipHqLIqeuXA7hGs52cm5M0CUqrmv7nBknyCOoZahOW2ED3WdpQHBKDxFBttczmd+BOJjCPClVYMz1wLTXalcUahMkmgcReQrBe12ZkgUEqd3k+niNnQ0qiLjhSUbaYLIrgwx+PMWYLegiiXIJmepkd7eJhxls3IEgYWWNBn0ikL2fQrjnqj5Ve4eM5EURfJUJ1+l6qXzZGMaNC7SBOlfFYE1R2Y7BxHfnMxGa9vC4GQ6ZKmCtmXiNJg0AGki6i9hxMzOrt4SiE1iKiXAb0SNFIN9kf0w6Oio9aLKUASLNEFWvGbJd3RVFPvgtinzZw0VhPh3+QhUjPRJDJLs5UF3q3rxGPnRg0dGniAyhaMHhS30Xb7Bpyw6IzhPeIvLLxDhazJWJYgOa80WhdruyYzjBRN5ggw8RR4G6GAZRxVQrq1GX9dl7K0njGWkpwJ0taTNf1d189uS2NBgdUGQ3oLWYTMel4zKR8nW5buEud1b0s66gq3Y7j/M6ZkyTsZwIpyQzIZ3ClTGRgdTFwTpf4rk03eAaJKMo7XauCdja71grEImC2bJfW/8sKqH03zVazzrhyDd2h5Q8JyUw4wyQBOidNZZyo+IgPprB4Bng5CSMSlKtXeHsr9uCOI4Us5rNxLhlKGcWvPv/Hy50tex0bmfCLcrkxuvMVEfX7XhiFSy5QmAdpXxkJmuS+WKcsX3ZAb0iKkvghiZ/0Ng5723RcZvAm5I6uZPZLAxZkUEKob2KwZOlYkHAx8nUN01aoei1uVLXRGkfy4i0zV1UAQU4sltEaq7JHOj1QrTW0ifbkvULfvCXsL5ata8slb2y4xbdwRZPGPs1gm7+jcCrSfjsPNHkICOpG7KzWckB613WMXQ9mTgCdHi4oPI8c8kp3Yj/R3hVna1jF3dEaR/LmJolxNwgXTgiF4sW8v2j+cj7iLYP+9Qh/8RLFVNvn+QelnWXT0idUkQa9q4sTSs+iyz+Mm1lQGI8hkEd7dteFLyR6C/iHbdLOs2BEFWzEXEm35+6ZZi0tVcsRDerVZ/I1n5TBYk+71jhb/1tKzbMAQZIIlwk/rBASBgKcAdSb305/q7dYO3uGKk9wbIaePcKj0a0bVqtjhVGl9jYF2+Yg2OWdnQniDBPtyrxfwfPYm+fTee/HFPjXMRqeEXzNyovb3a4jQu/aasYQzMToXQx17WPje4uifIQO9AZ3VFuh00gX+b1EuSHyDdhLn+ZCpG+iaW7mLV72/JtqsdYfRCDDK6dU8QJziyJw9XCSyhU82a+SCDXS+6rYKWA6Pbi721rM3lxe6GmoMMdqa3kL7KZjrHQ3D6qmR3jMjOf9qDjrqHLimM2S/BivNEltqt4ARAIb66LVs6t+6DUU+7ed0Eu2Joj/GKpjNyF+Gfi3vtvdJT55flFNQ3qnTNmNTINuVZML4u6wkBjyd18wBZfNRwDfGKtTKoS/JjdkwQORvpMrKBZqb/SuWKJ8ni6xlXzmd+R8T/Ie8DF6vMHSNy81+V1xEtZEMRpH8+ks8cyxLV/VZJC+MsNWdOi1aqgrXGymtngvBLL6MQ03HJCJYP9eSTF3BUsV4KPQz4ZNusTGjPzXsqqj76aVdPfux3FbJnO9MHeb3RLt8j61fDPUFWBkKyR/cXcWTgpc9babfMqUXxnomy2agBrnhDRl1vKf+VgJ1lh2cgtF71sjbK4hqWIP11p5icU29jZYMD4FZVN0/0gI881DK0WwCcIG0oY16CeEKU63ZJ+9Zoq1irB8KakZkEm+/wEiAQT1WzpWs96Ygo2CqkzwbTNZ7MU+iH6pTinZ50RBjcsE+QlTGvFLQrmHG+lxxUyf5uo30fGfje4WmORYRfJLOm/LEDL0kJCdvwBHHiWDEysxh8kGxMCfTKJ33KLptEqH+3rC8O7qNp45IbttgvsmB94MFjEugPSb040Ysd9YBtCoIsma5tl0j0n4bbRDYpBNye1M3jZfFRwlUM7TYGjvNg00fVKjpGnGG+7kFHXUCbgiBOJnw5PwI6T9WLV9VFZtdipGVkzgXY27lwoklqtnhXPcfBre1NQxAnIJ6P6jqHf5j3G5ErOdvA6+5akk/vmyDytNeMgStSunlh3TkvaXBTEaSfJPnMI0Qs/e7MwGsLFrV+Y/OuD3olY14T2Ptdm7VtPGrp/xCwvawBzDQrlStK1UiWHbPWuKYjSO91mW3sPna+Gm8qHXziO9VsKaz+g9JmDgZahfQdYLnSrQN6PlRaaELb6cU3fTGoTpQ0HUFWzEfk2kwPzqnNuKA9Z/6iHvLck9fOVwhXeLK1xh10PdnuAdyUBHHiVTG0Sxm4yEPs6qIYwZLp6X0SCfI0ZyLgsqRuCncc9hLbqGCbliD9TxIj/RBAh3hIxhvzkPraVhEthva2Mb51LMr/D8C28j7WTyV2eR/XjmxqgjhVGlts2/k+spl8cKPbRswyMncBfLS8b/igT1E6Rk6Z95YHHXUNbWqCDDxFjgToHi9ZtG2c394ZrZqzPd3aeYoCj3MkPkrVS/d6iU29Y5ueIE4Cy/nMJUTs6R27Ct5nRETqay0x0nsnQH/ycnMy06WpXPFnXnQ0AjYmyEAWy4b2IAE/kE0qEd56b+Gor+7QNWeZrA4/cHO6dhi+xehFrzBja1l9DDyU0s1DZfGNhIsJMpDN3pnjxtvVqvN9ZHPpBDPuU3PmkdJ4H4BWXrsXhCM8qHpfSSQmtE2e+44HHQ0DjQkyKJWWoR0O4D4v2bVB57XXaL9Wj5E5V/G6zwo4QtXN+73EoJGwMUFWy2Yln+li4p97SXLVxt4jOs1nvegQxS7p1vZKKPBUY5iYLk7mil2iYzeyfEyQNWTXKmj3g3GYfOLp3ddai9t981Qsl9fhHvmPGzBs+6WZ1wHe0j1qNUnCA2rWdJ6g8TUoAjFB1nA7fGZsvOVwOI0q6+OG84PQy9DXsb6+4N2YHatGICbIWu4IK68dBoKnd3Gb6dz2XPHqIG+6nnzmHIXY2xkVxuFqznwgSDvrVXdMkHVkrpxP/5yIPL2T9wF7jQyoH+JiQ9uzBfA012HmrlSudHG93sBB2x0TZIgIWwXtXrD8sikB77+wyNx63y70+ZnMZ7rQ8p1R2lvsZVmacJ+are2ytJ8xCUJXTJAholopjNkcrDhdlraSTQAzHkjl/J0Al/Pa/UTyCwkEvA2yO5LZ+e/L+tUMuJggLrJczmd+QMQPuhBdq4gNPqddL3mrQTWgvcdIT1VAnuY2zHRoKld8yItPzYCNCeIyy5VC+qfMdIlL8TWK9dnYc2Sn+d9edCzu1vZoUeCpxzsR/yyZLV3qxY5mwcYEEci0ZWjOrl8vW0k+nPWcucXR96AqMOwXoncfhcTEPbX3PB0XBu5VdfMomfGbERMTRCDrn05Pb9aacPqPeNoIeH9KN6X2SpUN7T4CvHzMe2tplTs2OKP0gYDbTS0aE0Qw/b1G5mAb/LAgbBVxm3lqe06s3m9PPn22Qt7q6CqgQ9r04iNebG82bEwQiYxXCtqFzLhMAvoFpI9oj5HZ4l/c6FhcyOzewuxp7kKEi5JZ83I348Uy/45ATBDJu8GH46xzr15kfqWrC/a6TOjqgnLOKPzo/18AAANrSURBVO1fAMZJmuoU8b9b1YvHyOObFxkTRDL3Vre2KSlwvo9IF0Rgxn2pIc6PlPPaveThfAcBb7CNDrXT/FDS1aaGxQTxkP5y95iJpCie3ult8NntemmNvQF7jPRZCshTbxK27YNTnfNneXCzqaExQTymv2JoFzDg6d2+j2n3kbniXwebsjif2a2F2NUcZW0uEHBhUje9FYzzGJ96h8cE8SGDlpG+EyDpd3xmzEvlTKc1Aw+YQ+W89hF5ah/Hd6l6aZIP7jW1ipggPqTfMsaOY7ZnE2E7WXUM3Jsa+IBXNrR7yMMHSWa8TqRMUPV5c2XtiXErIhATxKc7oXdG+kDbpj94UWczznLwisd+5YrCB7VNKT3qxZYYGxPE93vAKmjngb0Wa/NoFuF8NRutInYePaopPH6C+Bx+y9B+D6BWrRHuUHXzWJ9damp1MUF8Tr81bdxYaqk630d28Fn1OtURMIf7Eh3qmXPnhTluo48VEySADJcL6QOIKdQ5ABMfmMqWHgvAnaZWGRMkoPT70izTtW3131zUtashC8YECTDgVl67HYRg5wSM36s500tL5wAjUP+qY4IEmMPy9A01JIbNJmDHIIZh4FVUl09InfGJGYT+WGf8HSTwe6C3oHXYjMeDGEghfL8tazoHuOIroAjET5CAAjtYrWWkp8JjkYUvm8nnqD4VgQghBHU7REyQkFJn5bVbQTjel+EYt6k58wRfdMVK1hmBmCAh3SA9MzdKK9XEEwDt5G1IftlOVDvaJ39c8qYnRruJQEwQN1HySabH0CYogKc5gw10tOum0+gnvkKIQEyQEIK8ynwknz4bssUXmKeqgsUeQnav4YaLCVKDlJbz6S4iEmrSw8wXp3IlT4W0a+Bq3Q8ZE6RGKezJj/2uQvadADYcwoRPbFYmtefmPVUjU5t62JggNUz/0vyYHW1FyTLjx2sygwi/Vmy70Jqb/2oNzWzqoWOCRCD95bz2DSLaGrAzK8xRisz8Vipn/k8EzGtqE2KCNHX6Y+eHikBMkKEiFP/e1BGICdLU6Y+dHyoCMUGGilD8e1NHICZIU6c/dn6oCMQEGSpC8e9NHYGYIE2d/tj5oSIQE2SoCMW/N3UEYoI0dfpj54eKQEyQoSIU/97UEYgJ0tTpj50fKgIxQYaKUPx7U0fg/wOHDTF9AgBhEQAAAABJRU5ErkJggg==" alt="" class="infoaddress"> ${el.address}</p>
                                        </div>
                                        <img src="${el.photo}" alt="">
                                    </div>
                                </li>
                                <div class="info-one"></div>`

})

$(".theTop-info").html(konstr)


// 百度地图API功能
var map = new BMap.Map("allmap"); // 创建Map实例
map.centerAndZoom(new BMap.Point(102.924042, 30.630206), 10); // 初始化地图,用城市名设置地图中心点
map.enableScrollWheelZoom(); // 缩放功能

var someAddr = addArray

// 命名一个空数组用来装地址被解析后的坐标
var allClient = []
    //打开浏览器即执行封装的getPoint函数
$(function() {
    getPoint(someAddr);
})

//getPoint函数
function getPoint(someAddr) {
    // 创建地址解析器实例
    someAddr.forEach(element => {
        new BMap.Geocoder().getPoint(element, function(point) {
            //遍历出每个地址的坐标添加到allClient数组中
            allClient.unshift(JSON.stringify(point.lng) + "," + JSON.stringify(point.lat))
                //命名空字符串存放每组坐标用逗号分隔后得到的值
            var spaceStr = ""
            allClient.forEach(el => {
                //逗号分隔
                spaceStr = el.split(",")
                    //设置标注
                var marker = new BMap.Marker(new BMap.Point(spaceStr[0], spaceStr[1]));
                //添加标注到地图中
                map.addOverlay(marker);

            })
        });
    });
}


$(".theTop-info li").on("click", function() {
    $(this).next().slideToggle()
})


$(window).bind("load resize", function() {
    let screenDom = document.documentElement.clientWidth;
    $(".theTop-right").css({

        "width": (1 - screenDom / 1900) * 10 + 30 + "%",
    }).prev().css({
        "width": (1 - ($(".theTop-right").width() / screenDom)) * 99.8 + "%",
    })

    $(".top-map").css({

        "fontSize": screenDom / 110,
    })
})

//今日任务，解决用户发布动态时点击定位，拿到数据，存储至动态的信息里
// 研究如何拿到多条动态信息后，通过其地址自动转换成坐标，并且添加多点标记http://lbsyun.baidu.com/jsdemo.htm#h0_5
//处理登录逻辑，第一次登录拿到后端返回的201code码后，进入爱好选择，然后传至后台存储，若不选直接传"美食美景",
// 若后台返回false则不用选择爱好，直接进入index
// 查看李志发的ajax请求txt文档
//批量处理坐标http://www.itkeyword.com/doc/8620031783651102395