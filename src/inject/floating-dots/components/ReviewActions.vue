<template>
  <div>
    <floating-action-button ref="fab">
      <a class="btn-floating purple darken-4">
        <i class="large material-icons">
          rate_review
        </i>
      </a>
      <ul>
        <li v-if="reviewState !== 'CHANGES_REQUESTED'">
          <a @click.prevent.stop="requestChanges" title="Request changes" class="btn-floating btn-small red darken-4">
            <i class="material-icons">
              cancel
            </i>
          </a>
        </li>
        <li v-if="reviewState !== 'APPROVED'">
          <a @click.prevent.stop="approve"title="Approve" class="btn-floating btn-small green darken-4">
            <i class="material-icons">
              check_circle
            </i>
          </a>
        </li>
        <li>
          <a :title="reviewState" class="btn-floating btn-small" :style="reviewStateStyle">
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
      reviewState() {
        return this.review ? this.review.state : 'PENDING';
      },
      reviewStateStyle() {
        return {
          'background-color': reviewStatesColors[this.reviewState]
        }
      },
      reviewStateIcon() {
        return reviewStateIcons[this.reviewState];
      }
    },
    methods: {
      approve() {
        const pullRequest = this.$root.$data.pullRequest;
        ghClient.approve(pullRequest.octokitRequest);
      },
      requestChanges() {
        const pullRequest = this.$root.$data.pullRequest;
        ghClient.requestChanges(pullRequest.octokitRequest);
      }
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
