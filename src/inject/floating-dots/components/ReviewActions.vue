<template>
  <div>
    <floating-action-button ref="fab">
      <a class="btn-floating">
        <i class="large material-icons">
          rate_review
        </i>
      </a>
      <ul>
        <li>
          <a :title="state" class="btn-floating btn-small" :style="reviewStateStyle">
            <i class="material-icons">
              {{ reviewStateIcon }}
            </i>
          </a>
        </li>
      </ul>
    </floating-action-button>
  </div>
</template>

<script>
  import FloatingActionButton from './FloatingActionButton'
  import GhClient from "../../classes/GhClient";
  import Reviews from "../../classes/gh/Reviews";
  import { reviewStatesColors, reviewStateIcons } from '../styles';

  const ghClient = new GhClient();

  export default {
    data() {
      return {
        review: null
      }
    },
    asyncComputed: {
      async review() {
        const pullRequest = this.$root.$data.pullRequest;
        const reviewsResponse = await ghClient.getReview(pullRequest.octokitRequest);
        return Reviews.reviewsFromGhResponse(reviewsResponse).currentReview();
      }
    },
    computed: {
      state() {
        return this.review ? this.review.state : 'PENDING';
      },
      reviewStateStyle() {
        return {
          'background-color': reviewStatesColors[this.state]
        }
      },
      reviewStateIcon() {
        return reviewStateIcons[this.state];
      }
    },
    methods: {
    },
    mounted() {
      this.$nextTick(() => {
        this.$refs.fab.attach();
      });
    },
    components: {
      FloatingActionButton
    }
  }
</script>

<style>

</style>
