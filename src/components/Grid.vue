<template>
  <div class="grid">
    <h2 class="grid__title">
      <span>{{ title }}</span>
      <a
        v-if="link"
        :href="link"
        target="_blank"
        title="Добавить в Telegram"
        aria-label="Добавить в Telegram"
      >
        <app-icon name="open-in-new"></app-icon>
      </a>
    </h2>
    <app-card
      v-for="(sticker, index) in list"
      :key="sticker.icon"
      :icon="sticker.icon"
      :title="sticker.title"
      :size="`${sticker.size}` || ''"
      :is-custom="isAdd"
      selected
      class="grid__item"
      @remove="$emit('remove-sticker', sticker)"
      @toggle="$emit('toggle-sticker', [index, $event])"
    ></app-card>
    <div
      v-if="isAdd"
      class="grid__item add"
      title="Добавить стикер в текущий браузер"
      @click="$emit('open-popup')"
    >+</div>
  </div>
</template>

<script>
import AppCard from './Card.vue';
import AppIcon from './Icon.vue';

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    list: {
      type: Array,
      required: true,
    },
    link: {
      type: String,
      default: '',
    },
    isAdd: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    AppCard,
    AppIcon,
  },
  name: 'app-grid',
};
</script>

<style lang="stylus">
@require '../assets/smartgrid.styl'

.grid
  row-flex()
  margin-top $offset
  +from(992px)
    margin-top $offset_w992
  &__title
    col()
    col-size(24)
    col-size-w992(24)
    display flex
    column-gap 10px
    align-items center
  &__item
    col()
    col-size(12)
    col-size-w992(4.8)
    margin-bottom $offset
    padding 10px
    border-radius 4px
    box-shadow 0 3px 1px -2px rgba(0,0,0,.2),
               0 2px 2px 0 rgba(0,0,0,.14),
               0 1px 5px 0 rgba(0,0,0,.12)
    +from(992px)
      margin-bottom $offset_w992
    &.add
      display flex
      justify-content center
      align-items center
      font-size 100px
      cursor pointer
      &:hover
        background-color rgba(#000000, .3)
</style>
