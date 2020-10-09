<template>
  <div>
    <div :id="`task-${this.task._id}-container`">
      <div class="my-3">
        <!-- Our triggering (target) element -->
        <b-list-group-item
          :id="`popover-reactive-${this.task._id}`"
          href="#"
          :key="this_task._id"
          ref="button"
        >
          {{ this_task.description }}
        </b-list-group-item>

        <!-- <b-button
          :id="`popover-reactive-${this.task._id}`"
          variant="primary"
          ref="button"
        >
          Reactive Content Using Slots
        </b-button> -->
      </div>

      <!-- Output from the popover interaction -->

      <!-- Our popover title and content render container -->
      <!-- We use placement 'auto' so popover fits in the best spot on viewport -->
      <!-- We specify the same container as the trigger button, so that popover is close to button -->
      <b-popover
        :target="`popover-reactive-${this.task._id}`"
        triggers="click"
        :show.sync="popoverShow"
        placement="auto"
        :container="`task-${this.task._id}-container`"
        ref="popover"
        @show="onShow"
        @shown="onShown"
        @hidden="onHidden"
      >
        <template v-slot:title>
          <b-button @click="onClose" class="close" aria-label="Close">
            <span class="d-inline-block" aria-hidden="true">&times;</span>
          </b-button>
          Update task
        </template>

        <div>
          <b-form-group :state="descriptionState" class="mb-1">
            <b-form-input
              ref="description"
              :id="`popover-input-${this.task._id}`"
              v-model="description"
              :state="descriptionState"
              size="sm"
            ></b-form-input>
          </b-form-group>

          <b-alert show class="small">
            <strong>Current Values:</strong><br />
            description: <strong>{{ description }}</strong>
          </b-alert>

          <b-button @click="onSave" size="sm" variant="primary">Save</b-button>
        </div>
      </b-popover>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "Task",
  props: ["task"],
  data() {
    return {
      this_task: { ...this.task },
      description: this.task.description,
      descriptionState: null,
      descriptionReturn: "",
      popoverShow: false,
    };
  },
  watch: {
    description(val) {
      if (val) {
        this.descriptionState = true;
      }
    },
  },
  methods: {
    updateTask: async function() {
      console.log("task " + this.task._id + " clicked");
      try {
        await axios.put(`/api/tasks/update/${this.task._id}`, {
          description: this.description
        });
      } catch (err) {
        console.log(err);
      }
    },
    onClose() {
      this.popoverShow = false;
    },
    onSave() {
      console.log("test save");
      if (!this.description) {
        this.descriptionState = false;
      }

      if (this.description) {
        this.onClose();
        // Return our popover form results
        this.descriptionReturn = this.description;
      }
      
      this.updateTask();
      axios
        .get(`/api/tasks/${this.this_task._id}`)
        .then((result) => {
          console.log("data ===>",result.data);

          this.this_task = result.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onShow() {
      // This is called just before the popover is shown
      // Reset our popover form variables
      this.onClose();
      this.description = this.task.description;
      this.descriptionState = null;
      this.descriptionReturn = "";
    },
    onShown() {
      // Called just after the popover has been shown
      // Transfer focus to the first input
      this.focusRef(this.$refs.description);
    },
    onHidden() {
      // Called just after the popover has finished hiding
      // Bring focus back to the button
      this.focusRef(this.$refs.button);
    },
    focusRef(ref) {
      // Some references may be a component, functional component, or plain element
      // This handles that check before focusing, assuming a `focus()` method exists
      // We do this in a double `$nextTick()` to ensure components have
      // updated & popover positioned first
      this.$nextTick(() => {
        this.$nextTick(() => {
          (ref.$el || ref).focus();
        });
      });
    },
  },
};
</script>
