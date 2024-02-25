<template>
  <div class="flex mb-2 gap-2 justify-content-end">
    <Button
      @click="active = 0"
      rounded
      label="1"
      class="w-2rem h-2rem p-0"
      :outlined="active !== 0"
    />
    <Button
      @click="active = 1"
      rounded
      label="2"
      class="w-2rem h-2rem p-0"
      :outlined="active !== 1"
    />
    <Button
      @click="active = 2"
      rounded
      label="3"
      class="w-2rem h-2rem p-0"
      :outlined="active !== 2"
    />
  </div>
</template>
